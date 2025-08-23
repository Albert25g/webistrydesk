import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock nodemailer before importing the route
const sendMailMock = vi.fn() as unknown as ((
  ...args: unknown[]
) => Promise<unknown>) & {
  mockResolvedValue: (v: unknown) => void;
  mockClear: () => void;
};
sendMailMock.mockResolvedValue({ messageId: 'mock-id' });

vi.mock('nodemailer', () => ({
  createTransport: () => ({ sendMail: sendMailMock }),
}));

import { POST } from './route';

function makeReq(body: unknown, ip = '1.2.3.4', ts?: number) {
  const headers = new Headers();
  headers.set('x-forwarded-for', ip);
  const payload = { ...(body as object), ts };
  const req = new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return req;
}

describe('contact route', () => {
  beforeEach(() => {
    sendMailMock.mockClear();
  });

  it('silently accepts when honeypot is filled', async () => {
    const req = makeReq({
      name: 'Bot',
      email: 'bot@example.com',
      message: 'hello',
      website: 'http://spam',
    });
    const res = await POST(req as unknown as Request);
    const json = await res.json();
    expect(json).toEqual({ ok: true });
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it('rejects too-quick submissions based on ts', async () => {
    const now = Date.now();
    const req = makeReq(
      {
        name: 'Alice',
        email: 'a@b.com',
        message: 'This is a message long enough.',
      },
      '1.2.3.4',
      now
    );
    const res = await POST(req as unknown as Request);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty('error');
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it('accepts valid submissions and calls sendMail', async () => {
    const now = Date.now();
    const ts = now - 5000; // 5s ago
    const req = makeReq(
      {
        name: 'Alice',
        email: 'a@b.com',
        message: 'This is a message long enough.',
      },
      '1.2.3.4',
      ts
    );
    const res = await POST(req as unknown as Request);
    const json = await res.json();
    expect(json).toEqual({ ok: true });
    expect(sendMailMock).toHaveBeenCalled();
  });
});

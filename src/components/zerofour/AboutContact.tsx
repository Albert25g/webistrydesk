import React from 'react';

export default function AboutContact() {
  return (
    <div className="wrapper style4">
      <div className="inner">
        <div className="container">
          <div className="row">
            <div className="col-6 col-12-medium imp-medium">
              <section>
                <h2>
                  <strong>WebistryDesk</strong>
                </h2>
                <p>
                  WebistryDesk builds modern, fast, and trustworthy websites for
                  entrepreneurs and SMBs. We run a distributed set of satellite
                  locations and a central hub for accounts and meetings.
                </p>
                <a
                  href="#"
                  className="button alt icon solid fa-arrow-circle-right"
                >
                  Learn More
                </a>
              </section>

              <section>
                <h2>Get in touch</h2>
                <div>
                  <div className="row">
                    <div className="col-6 col-12-small">
                      <dl className="contact">
                        <dt>Twitter / X</dt>
                        <dd>
                          <a
                            href="https://x.com/webistrydesk"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @webistrydesk
                          </a>
                        </dd>
                        <dt>Facebook</dt>
                        <dd>
                          <a
                            href="https://facebook.com/webistrydesk"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            facebook.com/webistrydesk
                          </a>
                        </dd>
                        <dt>Website</dt>
                        <dd>
                          <a
                            href="https://webistrydesk.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            webistrydesk.com
                          </a>
                        </dd>
                        <dt>Marketing</dt>
                        <dd>
                          <a href="mailto:info@webistrydesk.com">
                            info@webistrydesk.com
                          </a>{' '}
                          (Kali)
                        </dd>
                        <dt>Support</dt>
                        <dd>
                          <a href="mailto:support@webistrydesk.com">
                            support@webistrydesk.com
                          </a>{' '}
                          (Oliver)
                        </dd>
                      </dl>
                    </div>
                    <div className="col-6 col-12-small">
                      <dl className="contact">
                        <dt>Head Office (HQ)</dt>
                        <dd>
                          WebistryDesk (Pty) Ltd
                          <br />
                          Riverside Office Park,
                          <br />
                          Government Boulevard, Riverside Park,
                          <br />
                          Mbombela (Nelspruit), Mpumalanga, 1201
                          <br />
                        </dd>
                        <dt>Phone</dt>
                        <dd>+27 79 730 2436</dd>
                        <dt>Accounts</dt>
                        <dd>
                          <a href="mailto:andre@webistrydesk.com">
                            andre@webistrydesk.com
                          </a>{' '}
                          (Andre)
                        </dd>
                        <dt>CEO</dt>
                        <dd>
                          <a href="mailto:albert@webistrydesk.com">
                            albert@webistrydesk.com
                          </a>{' '}
                          (Albertus Johann Els)
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

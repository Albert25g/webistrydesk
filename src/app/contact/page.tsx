export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-4">
          General:{' '}
          <a href="mailto:info@webistrydesk.com">info@webistrydesk.com</a>
        </p>
        <p className="mt-2">
          Support:{' '}
          <a href="mailto:support@webistrydesk.com">support@webistrydesk.com</a>
        </p>
        <p className="mt-2">
          Andre:{' '}
          <a href="mailto:andre@webistrydesk.com">andre@webistrydesk.com</a>
        </p>
        <p className="mt-2">
          Albert:{' '}
          <a href="mailto:albert@webistrydesk.com">albert@webistrydesk.com</a>
        </p>
        <p className="mt-2">
          Phone: <a href="tel:+27797302436">+27 79 730 2436</a>
        </p>
        <div className="mt-4">
          <strong>Head Office:</strong> Nelspruit (Mbombela)
          <br />
          <strong>Satellites:</strong> Pretoria, Cape Town
        </div>
      </div>
    </main>
  );
}

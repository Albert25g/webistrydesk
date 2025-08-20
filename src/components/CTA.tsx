export default function CTA(){
  return (
    <section id="contact" className="container-tight mt-24">
      <div className="card p-8 md:p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to look established?</h3>
        <p className="mt-3 text-white/70">We’ll send a quick plan with scope, timeline, and pricing.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="btn btn-gold" href="mailto:hello@webistrydesk.com">Email us</a>
          <a className="btn btn-ghost" href="tel:+27110000000">Call</a>
        </div>
      </div>
    </section>
  );
}

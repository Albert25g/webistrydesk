export default function LocationsSection() {
  const LOCATIONS = [
    { city: "Midrand (HQ)", line1: "International Business Gateway", line2: "Cnr New Road & 6th Road", line3: "Midrand, Gauteng, 1685" },
    { city: "Mbombela (Nelspruit)", line1: "Riverside Office Park", line2: "Government Blvd, Riverside Park", line3: "Mbombela, Mpumalanga, 1201" },
    { city: "Cape Town", line1: "The Towers, 2 Heerengracht St", line2: "Foreshore", line3: "Cape Town, 8001" },
    { city: "Durban", line1: "Umhlanga Ridge Office Park", line2: "2 Ncondo Place, Umhlanga Ridge", line3: "KwaZulu-Natal, 4319" },
  ];
  return (
    <section className="container-tight mt-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Locations</h2>
        <p className="mt-2 text-white/70">We’re close to your customers nation-wide.</p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LOCATIONS.map((l) => (
          <div key={l.city} className="card p-6">
            <div className="text-white font-medium">{l.city}</div>
            <div className="mt-2 text-white/70 text-sm">
              <div>{l.line1}</div><div>{l.line2}</div><div>{l.line3}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
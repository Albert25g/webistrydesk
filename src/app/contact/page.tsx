import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Contact — WebistryDesk',
  description: 'Get in touch with WebistryDesk.',
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Contact us</h1>
      <p className="mb-6 text-slate-600">
        Have a question or project in mind? Send us a message — we usually reply
        within one business day.
      </p>
      <LeadForm />
      <p className="mt-4 text-xs text-slate-500">
        We store your details to respond to your inquiry. No marketing unless
        you ask us.
      </p>
    </main>
  );
}

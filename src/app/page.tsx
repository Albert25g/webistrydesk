import { redirect } from 'next/navigation';

export default function Page(){
  // Redirect root to the static Zerofour template preview
  redirect('/zerofour/index.html');
}

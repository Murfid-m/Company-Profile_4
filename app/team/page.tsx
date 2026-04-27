import Link from 'next/link';
import TeamMember from '@/components/TeamMember';

export const metadata = {
  title: 'Team - Empat Coffee and Space',
};

async function getTeam() {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'public', 'data', 'team.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error loading team:', error);
    return [];
  }
}

export default async function TeamList() {
  const team = await getTeam();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Team</h1>
        <p className="text-lg text-gray-600">
          Bertemu dengan tim profesional kami yang berdedikasi untuk memberikan pengalaman terbaik.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {team.map((member: any) => (
          <Link key={member.id} href={`/team/${member.id}`}>
            <div className="cursor-pointer transition transform hover:scale-105">
              <TeamMember {...member} />
            </div>
          </Link>
        ))}
      </section>

      {/* Join Team CTA */}
      <section className="bg-amber-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-6">
          Kami sedang mencari individu yang passionate dan dedicated. Jika Anda tertarik untuk bergabung dengan kami, 
          silakan hubungi kami di careers@empatcoffee.com
        </p>
        <a
          href="mailto:careers@empatcoffee.com"
          className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-semibold"
        >
          Send Your CV
        </a>
      </section>
    </div>
  );
}

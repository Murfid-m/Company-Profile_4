import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'public', 'data', 'team.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const team = JSON.parse(fileContent);
    
    return team.map((member: any) => ({
      id: member.id.toString(),
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'public', 'data', 'team.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const team = JSON.parse(fileContent);
    const member = team.find((m: any) => m.id === parseInt(params.id));
    
    if (member) {
      return {
        title: `${member.name} - Empat Coffee and Space`,
      };
    }
  } catch (error) {
    console.error('Error loading team member:', error);
  }
}

async function getTeamMember(id: string) {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'public', 'data', 'team.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const team = JSON.parse(fileContent);
    return team.find((member: any) => member.id === parseInt(id));
  } catch (error) {
    console.error('Error loading team member:', error);
    return null;
  }
}

export default async function TeamMemberDetail({ params }: { params: { id: string } }) {
  const member = await getTeamMember(params.id);

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-amber-900 mb-4">Member Not Found</h1>
        <p className="text-gray-600 mb-6">Maaf, team member yang Anda cari tidak ditemukan.</p>
        <Link href="/team" className="text-amber-600 hover:text-amber-700 font-semibold">
          Kembali ke Team
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/team" className="text-amber-600 hover:text-amber-700 font-semibold mb-8 inline-block">
        ← Back to Team
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="relative h-96">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2">{member.name}</h1>
            <p className="text-2xl text-amber-600 font-semibold mb-6">{member.position}</p>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-amber-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Contact</h2>
              <a
                href={`mailto:${member.email}`}
                className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-semibold"
              >
                Send Email
              </a>
            </div>

            {/* Additional Info */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="font-semibold text-amber-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">{member.email}</p>

              <h3 className="font-semibold text-amber-900 mb-2">Department</h3>
              <p className="text-gray-600">{member.position.split(' ').slice(0, 2).join(' ')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Team Members */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">Other Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4]
            .filter(id => id !== member.id)
            .slice(0, 3)
            .map(id => (
              <Link key={id} href={`/team/${id}`}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
                  <p className="font-semibold text-amber-900">Team Member {id}</p>
                  <p className="text-sm text-gray-600">Click to view profile</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

import { getCollection } from 'astro:content';
import { SITE_CREATOR, SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET() {
  const home = (await getCollection('home'))[0]?.data;
  const profile = (await getCollection('profile'))[0]?.data;
  const skillsData = await getCollection('skills');
  const experience = await getCollection('experience');
  const education = await getCollection('education');
  const certificationsData = await getCollection('certifications');
  const learningData = await getCollection('learning');

  const allSkills = skillsData.map(entry => entry.data).flat();
  const allCerts = certificationsData.map(entry => entry.data).flat();
  const allLearning = learningData.map(entry => entry.data).flat();

  const lines = [];

  // Metadata
  lines.push(`# ${SITE_TITLE}`);
  lines.push(`> ${SITE_DESCRIPTION}`);
  lines.push('');

  // Introduction
  if (home) {
    lines.push('## Introduction');
    lines.push(`${home.greeting} ${home.intro} ${SITE_CREATOR}.`);
    lines.push(home.role);
    lines.push(home.description);
    lines.push('');
  }

  // Profile
  if (profile) {
    lines.push(`## ${profile.title}`);
    lines.push(profile.description);
    lines.push('');
  }

  // Skills
  if (allSkills.length > 0) {
    lines.push('## Skills');
    lines.push(allSkills.join(', '));
    lines.push('');
  }

  // Experience
  if (experience.length > 0) {
    lines.push('## Most Recent Experience');
    experience
      .sort(
        (a, b) =>
          new Date(b.data.startDate ?? 0).getTime() - new Date(a.data.startDate ?? 0).getTime()
      )
      .forEach(job => {
        lines.push(`### ${job.data.title}`);
        lines.push(`**${job.data.subtitle}**`);
        lines.push(job.data.description);
        lines.push('');
      });
  }

  // Education
  if (education.length > 0) {
    lines.push('## Education');
    education.forEach(edu => {
      lines.push(`### ${edu.data.title}`);
      lines.push(edu.data.subtitle);
      lines.push('');
    });
  }

  // Certifications
  if (allCerts.length > 0) {
    lines.push('## Certifications');
    lines.push(allCerts.map(c => `- ${c}`).join('\n'));
    lines.push('');
  }

  // Learning
  if (allLearning.length > 0) {
    lines.push('## Currently Learning');
    lines.push(allLearning.map(l => `- ${l}`).join('\n'));
    lines.push('');
  }

  // Footer / Contact
  lines.push('## Contact');
  lines.push('> For collaboration inquiries, please contact me via LinkedIn.');
  if (home?.connect) lines.push(`[LinkedIn](${home.connect})`);
  lines.push(`GitHub: https://github.com/Alessandro-Incantalupo`);

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}

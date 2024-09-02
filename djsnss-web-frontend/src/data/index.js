import GrainAThon from '../assets/Events/GrainAThon.png';
import BorivaliTP from '../assets/Events/TreePlantation.png'
import NSSCamp from '../assets/Events/NSSCamp.jpg'
import AnnualCharity from '../assets/Events/AnnualCharity.png'
import VoterRegistration from '../assets/Events/VoterRegistration.png'
import BDD from '../assets/Events/BDD.jpg'

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '',
  },
  {
    id: 2,
    name: 'About Us',
    link: 'about',
  },
  {
    id: 3,
    name: 'Events',
    link: 'events',
  },
  {
    id:4,
    name: 'Volunteer',
    link: 'volunteer',
  },
  {
    id: 5,
    name: 'Admin',
    link: 'admin',
  },
]

export { MenuLinks };

const SocialLinks = [
  {
    id: 1,
    name: 'Instagram',
    link: 'https://www.instagram.com/nss_djsanghvi',
  },
  {
    id: 2,
    name: 'Linkedin',
    link: 'https://in.linkedin.com/company/djsce-nss',
  },
  {
    id: 3,
    name: 'Facebook',
    link: 'https://www.facebook.com/share/tbpuL3mtrdtD7iwD/?mibextid=qi2Omg',
  },
  {
    id: 4,
    name: 'Twitter',
    link: ' https://x.com/NSS_DJSCE',
  },
  {
    id: 5,
    name: 'Github',
    link: 'https://github.com/djsnss/',
  }
]

export { SocialLinks };

// index.js
export const featuresData = [
  {
    id: 1,
    title: "NSS CAMP",
    description: "A camp to remember",
    slug: "nss-camp",
    link: "/eventdetails/nss-camp",
    background: "bg-pink-600",
    imageURL: NSSCamp,
    longDescription: "From January 26 to 31, the NSS unit of Dwarkadas J. Sanghvi College of Engineering organized an enriching camp at Dahanu, focusing on community service and personal growth. The camp kicked off with cleanliness drives, team-building activities, and creative tasks like poster making and wall painting, all fostering a spirit of teamwork and community engagement. Throughout the week, volunteers participated in impactful initiatives, including educational outreach, a medical camp, and environmental awareness drives. The installation of solar street lights highlighted the camp's commitment to sustainability. The camp concluded with cultural celebrations and a strong sense of accomplishment among participants, leaving a lasting impact on the community and volunteers alike.",
    scale: "Large",
    duration: "6 days",
    location: "Dahanu",
    date: "26th Jan - 31st Jan 2024",
  },
  {
    id: 2,
    title: "BLOOD DONATION DRIVE",
    description: "Donate blood, save lives",
    slug: "blood-donation-drive",
    link: "/eventdetails/blood-donation-drive",
    background: "bg-purple-600",
    imageURL: BDD,
    longDescription: "Set up for success: Blood Donation Drive On 14th February 2023, the NSS unit of Dwarkadas J. Sanghvi College of Engineering organized a blood donation drive in collaboration with the Red Cross Society. The event, held at DJ Sanghvi College, aimed to raise awareness about the importance of blood donation and encourage students to contribute to this life-saving cause. The drive was a resounding success, with over 100 volunteers donating blood and many more participating in the event. The drive featured informative sessions on the benefits of blood donation, dispelling myths and misconceptions and inspiring participants to make a difference. The event showcased the power of collective action and community involvement in saving lives and promoting health and well-being. The enthusiasm and dedication of all participants made the drive a memorable and impactful experience, setting the stage for future initiatives to support public health and welfare.",
    scale: "Large",
    duration: "1 day",
    location: "DJ Sanghvi College",
    date: "14th Feb 2024",
  },
  {
    id: 3,
    title: "GRAIN-A-THON",
    description: "Our small actions, others' huge aid",
    slug: "grain-a-thon",
    link: "/eventdetails/grain-a-thon",
    background: "bg-yellow-600",
    imageURL: GrainAThon,
    longDescription: "Scarcity to abundance: Grain-a-thon On 15th August 2023, the NSS unit of Dwarkadas J. Sanghvi College of Engineering organized a Grain-a-thon, a food donation drive to support underprivileged communities. The event, held at DJ Sanghvi College, aimed to raise awareness about food insecurity and encourage students to contribute to this vital cause. The drive was a resounding success, with over 200 volunteers donating grains and other essential food items. The drive featured inspiring speeches, interactive sessions, and engaging activities that highlighted the importance of community service and collective action. The event showcased the power of empathy and compassion in addressing social challenges and fostering a culture of giving. The enthusiasm and generosity of all participants made the drive a memorable and impactful experience, setting the stage for future initiatives to support vulnerable communities and promote social justice.",
    scale: "Large",
    duration: "1 day",
    location: "DJ Sanghvi College",
    date: "15th Aug 2024",
  },
  {
    id: 4,
    title: "TREE PLANTATION",
    description: "Planting trees, planting hope",
    slug: "tree-plantation",
    link: "/eventdetails/tree-plantation",
    background: "bg-blue-600",
    imageURL: BorivaliTP,
    longDescription: "Tree Plantation Drive: 'Meri Mitti Mera Desh' On 9th August 2023, the NSS unit of Dwarkadas J. Sanghvi College of Engineering successfully organized a tree plantation drive at Veer Savarkar Udhyan, Borivali West. The event, themed 'Meri Mitti Mera Desh', aimed to foster environmental responsibility and raise awareness about the vital role of trees in combating climate change. Around 80 dedicated volunteers, including students and organizers, participated in planting over 110 saplings of native species, carefully chosen to enhance the local ecosystem. The drive began with inspiring speeches, and participants eagerly engaged in planting activities, showcasing their commitment to creating a greener future. The event highlighted the power of collective action and community involvement in environmental conservation. The enthusiasm and teamwork displayed by all contributed to the event's resounding success, marking a significant step toward a sustainable environment.",
    scale: "Medium",
    duration: "1 day",
    location: "Veer Savarkar Udhyan, Borivali West",
    date: "9th Aug 2024",
  },
  {
    id: 5,
    title: "ANNUAL CHARITY DRIVE",
    description: "Shaping India's futures",
    slug: "annual-charity-drive",
    link: "/eventdetails/annual-charity-drive",
    background: "bg-green-600",
    imageURL: AnnualCharity,
    longDescription: "From February 20th to 24th, DJ Sanghvi College of Engineering became a center of compassion and creativity during the DJSNSS Annual Charity Drive. This event united volunteers and the college community in a mission to raise funds for specially-abled children.The drive was a resounding success, raising over Rs 75,000 to support three NGOs: Kshitij, based at Charni Road, and Purnavas and VDIS, both in Malad. These funds will significantly aid the organizations in their ongoing efforts to nurture the talents of these children. The event featured a vibrant showcase of handcrafted items made by the children, including handmade chocolates, earrings, anklets, bracelets, and jute bags. Ganpati idols, symbolizing new beginnings, were also on display. Purchasing these items did more than raise funds; it celebrated the talents of these children, affirming their value and creativity. The Annual Charity Drive wasn’t just about raising money—it was a celebration of community spirit and collective kindness. In those five days, DJ Sanghvi College became a place where every contribution helped create a world where everyone’s abilities are recognized. The DJSNSS Annual Charity Drive showed that when we give from the heart, we enrich lives and build a tapestry of kindness that touches us all.",
    scale: "Large",
    duration: "5 days",
    location: "DJ Sanghvi College",
    date: "20th Feb - 24th Feb 2024",
  },
  {
    id: 6,
    title: "VOTER REGISTRATION",
    description: "Your vote, your voice",
    slug: "voter-registration",
    link: "/eventdetails/voter-registration",
    background: "bg-red-600",
    imageURL: VoterRegistration,
    longDescription: "Voter Registration Drive: 'Your Vote, Your Voice' On 15th September 2023, the NSS unit of Dwarkadas J. Sanghvi College of Engineering organized a voter registration drive to encourage students to exercise their democratic rights. The event, held at DJ Sanghvi College, aimed to raise awareness about the importance of voting and empower students to participate in the electoral process. The drive was a resounding success, with over 300 students registering to vote and many more engaging in informative sessions and interactive activities. The drive featured inspiring speeches, engaging discussions, and interactive games that highlighted the significance of voting in shaping the future of the nation. The event showcased the power of civic engagement and community involvement in promoting democracy and social change. The enthusiasm and commitment of all participants made the drive a memorable and impactful experience, setting the stage for future initiatives to support voter education and participation.",
    scale: "Medium",
    duration: "1 day",
    location: "DJ Sanghvi College",
    date: "15th Sep 2024",
  },
];

const Team = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'CTO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'CEO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 4,
    name: 'Jane Doe',
    role: 'CTO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 5,
    name: 'John Doe',
    role: 'CEO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 6,
    name: 'Jane Doe',
    role: 'CTO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 7,
    name: 'John Doe',
    role: 'CEO',
    imageURL: 'https://picsum.photos/',
  },
  {
    id: 8,
    name: 'Jane Doe',
    role: 'CTO',
    imageURL: 'https://picsum.photos/',
  }
]
 export { Team };

const TeamYearLinks = [
  {
    id: 0,
    name: 'MEET THE CURRENT TEAM',
    link: 'faculty-team-2023-24',
  },
  {
    id: 1,
    name: 'TEAM 2022-23',
    link: 'faculty-team-2022-23',
  },
  {
    id: 2,
    name: 'TEAM 2021-22',
    link: 'faculty-team-2021-22',
  },
  {
    id: 3,
    name: 'TEAM 2020-21',
    link: 'faculty-team-2020-21',
  },
  {
    id: 4,
    name: 'TEAM 2019-20',
    link: 'faculty-team-2019-20',
  },
  {
    id: 5,
    name: 'TEAM 2018-19',
    link: 'faculty-team-2018-19',
  },
  {
    id: 6,
    name: 'TEAM 2017-18',
    link: 'faculty-team-2017-18',
  },
  {
    id: 7,
    name: 'TEAM 2016-17',
    link: 'faculty-team-2016-17',
  },
  {
    id: 8,
    name: 'TEAM 2015-16',
    link: 'faculty-team-2015-16',
  },
  {
    id: 9,
    name: 'TEAM 2014-15',
    link: 'faculty-team-2014-15',
  },
]

export { TeamYearLinks };
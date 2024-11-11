export type Company = {
  name: string;
  org_type: string;
  companyImage: string;
  description: string;
};

export type CompaniesMap = {
  [key: string]: Company;
};

export const companies: CompaniesMap = {
  'The Art of Problem Solving': {
    name: 'The Art of Problem Solving',
    org_type: 'Recruiting',
    companyImage: 'images/company-images/aops.svg',
    description:
      'Art of Problem Solving is an education technology company inspiring and training the next generation of great problem solvers. They help students develop problem-solving skills by offering resources in a variety of different formats, building a community where students can connect and collaborate with their peers.'
  },
  // CoNote: {
  //   name: 'CoNote',
  //   org_type: 'Recruiting',
  //   companyImage: 'images/company-images/conote.svg',
  //   description:
  //     'CoNote.ai is a start-up technology that helps researchers transcribe, analyze, and organize their data while collaborating with their team.'
  // },
  'UCSD Design Lab': {
    name: 'UCSD Design Lab',
    org_type: 'Recruiting',
    companyImage: 'images/company-images/designlab.svg',
    description:
      'The UC San Diego Design Lab works on major societal issues, such as large-scale education, automation, healthcare, and the ethical issues that are of ever-increasing importance. For the Design Lab, design is a way of thinking, addressing the core issues, always taking a systems point of view, emphasizing the role of people in the complex systems of the modern world.'
  },
  'UCSD Library': {
    name: 'UCSD Library',
    org_type: 'Recruiting',
    companyImage: 'images/company-images/ucsdlibrary.svg',
    description:
      "The UC San Diego Library, one of the nation's top public academic libraries, plays a critical role in advancing the university's research, teaching, patient care, and public service missions. The Library provides the foundation of knowledge needed to advance cutting-edge discoveries in a wide range of disciplines--from healthcare to public policy to the arts."
  },
  'UCSD ACM': {
    name: 'UCSD ACM',
    org_type: 'Recruiting',
    companyImage: 'images/company-images/acm.svg',
    description:
      "ACM at UCSD is an inclusive community of students passionate about technology. As UCSD's largest members-first computing org, they offer workshops, socials, and projects through different communities including AI, Cyber, Hack, and Design."
  },
  Google: {
    name: 'Google',
    org_type: 'Networking Only',
    companyImage: 'images/company-images/google.svg',
    description:
      "Google is a global technology leader known for its search engine, online advertising, and diverse range of products. Beginning as an online search firm, it has expanded to include services such as Google Cloud, YouTube, and Android. Committed to innovation, Google's mission is to organize the world's information and make it universally accessible and useful."
  },
  // Deloitte: {
  //   name: 'Deloitte',
  //   org_type: 'Networking Only',
  //   companyImage: 'images/company-images/deloitte.svg',
  //   description:
  //     'With more than 100,000 professionals, Deloitte provides audit and assurance, tax, consulting, and risk and financial advisory services to a broad cross-section of the largest corporations and governmental agencies.'
  // },
  Illumina: {
    name: 'Illumina',
    org_type: 'Networking Only',
    companyImage: 'images/company-images/illumina.svg',
    description:
      'Illumina is a leading developer, manufacturer, and marketer of life science tools and integrated systems dedicated to making genomics useful for all. Innovating at the intersection of technology, biology, and health, they provide sequencing innovations enabling researchers and clinicians to usher in the future of personalized medicine.'
  },
  Notion: {
    name: 'Notion',
    org_type: 'Networking Only',
    companyImage: 'images/company-images/notion.svg',
    description:
      "Notion blends your everyday work tools into one. Product roadmap? Company wiki? Meeting notes? With Notion, they're all in one place, and totally customizable to meet the needs of any workflow. It's the all-in-one workspace for you, your team, and your whole company."
  },
  'San Diego Zoo': {
    name: 'San Diego Zoo',
    org_type: 'Networking Only',
    companyImage: 'images/company-images/sdzoo.svg',
    description:
      'San Diego Zoo is an international nonprofit conservation leader, committed to inspiring passion for nature and creating a world where all life thrives. Made up of two world-famous facilities, the San Diego Zoo and San Diego Zoo Safari Park— together they give millions of guests, in person and virtually, the opportunity to experience conservation in action.'
  }
};

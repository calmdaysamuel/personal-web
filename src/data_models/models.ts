export interface Role {
  organization: String;
  title: String;
  date: String;
}

export interface WorkExperience {
  company: String;
  role: String;
  date: String;
  logo: String;
  summary: String;
}

export interface Project {
  name: String;
  date: String;
  githubLink: String;
  summary: String;
  imageUrls: String[];
}

export interface ArticleCard {
  articleHash: String;
  title: String;
  summary: String;
  date: String;
}

export interface Article {
  title: String;
  summary?: String;
  date?: String;
  tags: String[];
  blocks: Block[];
}

export interface Block {
  type: String; // heading, sub-heading, paragraph, image, link
  content: String;
  desc?: String;
}

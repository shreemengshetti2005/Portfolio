export const projectsData = [
  {
    id: 1,
    name: "AI Document Assistant",
    description:
      "I built an AI-powered document intelligence platform where users can upload multiple PDFs and interact with them through three core features: search, podcast, and insights. For easy navigation, I combined hierarchy-based rules with a Random Forest model to automatically detect document titles and subheadings (H1, H2, H3). The documents are chunked, converted into embeddings using Sentence Transformers, and stored in ChromaDB. The search feature supports both semantic and keyword-based retrieval and returns the top relevant results from uploaded PDFs. The podcast feature converts document summaries into natural audio using Google Cloud Text-to-Speech, while the insights feature highlights and summarizes important information from the documents.",
    tools: [
      "Python",
      "LangChain",
      "Hugging Face",
      "ChromaDB",
      "PyMuPDF",
      "Google Cloud TTS",
      "Go",
      "React.js",
    ],
    role: "AI/ML Developer",

    code: "",
    demo: "",
  },
  {
    id: 4,
    name: "NirikshanSahAI – AI Institute Inspection System",
    description:
      "I worked on an AI-driven inspection system designed to automate institutional audits and compliance checks. The system uses OCR, LLMs, and YOLOv8 to inspect documents and physical infrastructure, automating nearly 90% of manual inspection tasks. A scalable ML pipeline was built to generate real-time compliance reports in under 60 seconds by analyzing inspection data and regulatory documents. The platform streamlines inspections, surfaces actionable insights, and significantly improves efficiency for large organizations.",
    tools: ["Python", "YOLOv8", "OCR", "Hugging Face", "LLMs", "PyTorch"],
    role: "AI/ML Developer",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "Sentiment Analysis System",
    description:
      "I built a sentiment analysis system that classifies Amazon customer reviews into positive, neutral, or negative categories. The model was fine-tuned using RoBERTa on labeled review data to accurately capture customer opinions and sentiment patterns. This system helps in understanding user feedback at scale and supports data-driven decision-making by analyzing large volumes of textual reviews.",
    tools: ["Python", "Hugging Face", "RoBERTa", "PyTorch", "Scikit-learn"],
    role: "ML Developer (NLP)",

    code: "",
    demo: "",
  },
  //   {
  //     id: 4,
  //     name: "Newsroom Management",
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
  //     code: "",
  //     demo: "",
  //     role: "Full Stack Developer",
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },

// Basic interactions: smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const details = {
    pathway: {
      title: 'Student Learning Pathway Explorer & Tracker',
      meta: 'Jan 2026 - Apr 2026 • Supervisor: Dr. Vinayak Abrol',
      description: 'Built an offline academic and career advisory system for M.Tech students that maps course records, transcripts, and resumes into personalized academic pathways. Integrated agents, Neo4j knowledge graph, and an offline-first RAG pipeline for privacy-aware guidance.',
      stack: 'Python, Streamlit, LangChain, Hugging Face Sentence-Transformers, FAISS, OCR, Neo4j, Docker, RAG Pipeline',
      github: 'https://github.com/Abhilash1602/Learning-Agent.git'
    },
    ragAssistant: {
      title: 'RAG-Powered Assistant',
      meta: 'Nov 2025 • HCL Hackathon Project',
      description: 'Built and deployed a document assistant with PDF/text ingestion, intelligent chunking, MiniLM-L6-v2 embeddings, and FAISS semantic search to deliver accurate context-aware responses. Provided an interactive Streamlit chat interface and deployed the system on Streamlit Cloud.',
      stack: 'Python, Streamlit, LangChain, Hugging Face Sentence-Transformers, FAISS, PyPDF2/pypdf, Document Chunking, RAG Pipeline',
      github: 'https://github.com/pauldebojyoti/HCL-Hackathon.git'
    },
    memes: {
      title: 'Mental Health Memes Classification',
      meta: 'Feb 2025 - Apr 2025 • Supervisor: Dr. Md Shad Akhtar',
      description: 'Implemented a multimodal system to detect depression and anxiety in memes using OCR text, visual cues, and figurative reasoning. Used Sentence-BERT, prompt-based LLMs, and RAG knowledge fusion to create contextual embeddings and improve classification accuracy.',
      stack: 'Google Colab, Python, MentalBERT, PaddleOCR, RAG, Sentence Transformer, LLAVA',
      github: 'https://github.com/Aman9058490490/Mental-Health-meme-Classification.git'
    },
    nl2sql: {
      title: 'Virtualized NL2SQL System for Distributed Job Recommendation',
      meta: 'Aug 2025 - Nov 2025 • Supervisor: Dr. Mukesh Mohania',
      description: 'Created a federated NL2SQL system that queries distributed MySQL databases using LLMs and an AI-driven ETL module. Used dynamic schema merging and regex fallback to provide unified, ranked, summarized answers for job recommendations.',
      stack: 'Llama-3 (Groq), Gemini-Flash, Python, MySQL, Regex, JSON',
      github: 'https://github.com/Aman9058490490/A-Virtualized-NL2SQL-System-for-Distributed-Job-Recommendation.git'
    }
  };

  const projectCards = document.querySelectorAll('.project-card');
  const detailBox = document.getElementById('project-detail');
  const detailTitle = document.querySelector('.project-detail-title');
  const detailMeta = document.querySelector('.project-detail-meta');
  const detailDescription = document.querySelector('.project-detail-description');
  const detailStack = document.querySelector('.project-detail-stack');

  if (!detailBox || !detailTitle) return;

  function showProjectDetail(key) {
    const project = details[key];
    if (!project) return;
    detailTitle.textContent = project.title;
    detailMeta.textContent = project.meta;
    detailDescription.textContent = project.description;
    detailStack.textContent = project.stack;
    const githubLink = document.querySelector('.project-detail-link');
    if (githubLink) {
      githubLink.href = project.github || '#';
      githubLink.textContent = project.github ? 'View on GitHub' : 'No GitHub link available';
      githubLink.style.display = project.github ? 'inline-flex' : 'none';
    }
    detailBox.classList.remove('hidden');
  }

  projectCards.forEach(card => {
    const key = card.dataset.project;
    const githubAnchor = card.querySelector('.project-github-link');
    if (githubAnchor && details[key] && details[key].github) {
      githubAnchor.href = details[key].github;
      githubAnchor.textContent = 'View Repo';
      githubAnchor.style.display = 'inline-flex';
      githubAnchor.addEventListener('click', e => {
        e.stopPropagation();
      });
    } else if (githubAnchor) {
      githubAnchor.style.display = 'none';
    }

    card.addEventListener('click', () => showProjectDetail(key));
    card.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showProjectDetail(key);
      }
    });
  });

  const researchSummary = document.querySelector('.research-summary');
  const researchDetail = document.querySelector('.research-detail');
  if (researchSummary && researchDetail) {
    researchSummary.addEventListener('click', () => {
      researchDetail.classList.toggle('hidden');
      researchSummary.setAttribute('aria-pressed', researchDetail.classList.contains('hidden') ? 'false' : 'true');
    });
    researchSummary.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        researchDetail.classList.toggle('hidden');
        researchSummary.setAttribute('aria-pressed', researchDetail.classList.contains('hidden') ? 'false' : 'true');
      }
    });
  }
});

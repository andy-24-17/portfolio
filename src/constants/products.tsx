import ipl from "public/images/ipl.png";
import hacksphere from "public/images/hacksphere.png";
import clrspk from "public/images/clrspeak.png";
import apptimizer from 'public/images/apti.png';
import robot from 'public/images/robot.png'


export const products = [
  {
    href: "https://github.com/andy-24-17",
    title: "Enterprise Document Intelligence Platform ",
    description:
      "Helps to convert financial ledger into well structured CSV",
    thumbnail: hacksphere,
    images: [],
    stack: ["Python", "OCR", "NLP","RAG"],
    slug: "pdftocsv",
    content: (
      <div>
        <p>
        Enterprise Document Intelligence Platform is a scalable system designed to automate document processing with advanced OCR, semantic search, and custom RAG pipelines, achieving 95% accuracy in extracting unstructured data. The platform streamlines workflow automation and enables efficient data transformation using serverless computing,
        handling over 10,000+ documents per month with automated Excel report generation.{" "}
        </p>
        <p>
        To enhance decision-making, a real-time analytics dashboard was developed using interactive visualization tools and stream processing technologies.
        This reduced data processing time by 80%, enabling faster insights and improving operational efficiency for stakeholders.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/andy-24-17/IPL-score-predictor",
    title: "Cricket Score Predictor",
    description:
      "Uses different approaches in ML to predict score with high accuracy.",
    thumbnail: ipl,
    images: [],
    stack: ["Python", "Scikit learn","Machine Learning"],
    slug: "scorepredictor",
    content: (
      <div>
        <p>
        IPL Score Prediction System is a machine learning-based model designed to predict IPL match scores with 98%+ accuracy.
        By leveraging an ensemble of Linear Regression, Decision Trees, and Random Forest, the system optimizes predictions through advanced feature engineering and hyperparameter tuning.{" "}
        </p>
        <p>
        Through comprehensive data preprocessing, including missing value handling and categorical encoding, the model&apos;s accuracy improved by 15%. Performance was rigorously evaluated using R² and MAE metrics,
        with results visualized via Matplotlib, ensuring clear insights for stakeholder validation.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://aptimizer.vercel.app/",
    title: "Aptimizer",
    description:
      "A responsive web-based cognitive training application designed to enhance users' quantitative reasoning skills.",
    thumbnail: apptimizer,
    images: [],
    stack: ["HTML", "CSS" , "Javascript"],
    slug: "aptimizer",
    content: (
      <div>
        <p>
        Aptimizer is a web-based cognitive training application designed to boost users&apos; quantitative reasoning skills through engaging, gamified fast calculation challenges. Built with HTML, CSS, and JavaScript, it delivers a seamless,
         responsive experience without server dependencies, making it lightweight and easily accessible.{" "}
        </p>
        <p>
        By offering personalized math challenges, Aptimizer has improved users&apos; problem-solving speed by 25%,
        leading to measurable IQ enhancements for regular users. The intuitive design and interactive approach resulted in a 40% increase in user engagement,
        making learning both effective and enjoyable.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/andy-24-17/ClearSpeak",
    title: "Clear Speak",
    description:
      "Pronunciation Evaluation and Feedback System",
    thumbnail: clrspk,
    images: [],
    stack: ["Python", "Google Speech Recognition API"],
    slug: "clrspk",
    content: (
      <div>
        <p>
        ClearSpeak is an interactive application designed to enhance pronunciation skills by evaluating spoken words against reference text. Using advanced speech recognition, phoneme analysis, and pitch detection, 
        it provides detailed feedback on pronunciation accuracy and fluency.{" "}
        </p>
        <p>
        Key Features

🔹 Speech Recognition – Transcribes user speech using the Google Speech Recognition API.
🔹 Phoneme Analysis – Converts text into phonemes and compares them to detect pronunciation errors.
🔹 Pitch Extraction – Analyzes pitch variations to assess tonal accuracy.
🔹 Similarity Scoring – Calculates how closely the user&apos;s speech matches the reference text.
🔹 Feedback Mechanism – Highlights pronunciation differences at the phoneme level with actionable insights.
🔹 Interactive UI – Built with Tkinter, ensuring a seamless and intuitive user experience.
🔹 Dataset Integration – Dynamically loads reference text and pitch data for real-time analysis.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/andy-24-17/RoboticArm",
    title: "4 DOF Robotic Arm",
    description:
      "Pronunciation Evaluation and Feedback System",
    thumbnail: robot,
    images: [],
    stack: ["C++", "ESP32"],
    slug: "robot",
    content: (
      <div>
        <p>
        This project provides a framework to control a robotic arm using the ESP32 microcontroller. It leverages WiFi connectivity and a web server to send commands to servos,
        allowing remote control of the robot arm&apos;s movements.{" "}
        </p>
        <p>
        Control multiple servos including base, shoulder, elbow, and gripper.</p>{" "}
        <p>
        Configure the arm&apos;s positions and record steps for sequential movement.</p>{" "}
        <p>
        Remote operation via a web-based interface hosted on the ESP32.</p>{" "}
        
      </div>
    ),
  },
  
];

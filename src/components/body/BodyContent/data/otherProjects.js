import diabeticRetinopathy from "../../../../assets/media/diabetic_retinopathy.png";
import bloodVessels from "../../../../assets/media/blood_vessels.png";
import prajwalPortfolio from "../../../../assets/media/prajwal_portfolio.png";
import four from "../../../../assets/media/sample_card_image.png";

const portfolios = [
    {
        imageSrc: diabeticRetinopathy,
        title: 'Automatic Diabetic Retinopathy Assessment',
        description: 'In this project, I used Deep Learning for Retinal Lesions segmentation as well as ' +
            'trained pre-trained Inception-V3 Network Architecture for severity grading of Diabetic Retinopathy' +
            ' and Diabetic Macular Edema.',
        demoUrl: "https://www.facebook.com",
        identifier: []
    },
    {
        imageSrc: bloodVessels,
        title: 'Retinal Blood Vessels Extraction',
        description: 'Segmentation and delineation of different morphological attributes of the retinal blood vessels are ' +
            'utilized for the screening, treatment, diagnosis and evaluation of ' +
            'various ophthalmological and cardiovascular diseases.',
        demoUrl: "#",
        identifier: []
    },
    {
        imageSrc: prajwalPortfolio,
        title: 'Portfolio',
        description: 'This project was created to showcase the projects that I have done so far. I have used ' +
            'React JS to build the front-end and the website content database is powered by MongoDB.',
        demoUrl: "http://www.prajwalp.com.np",
        identifier: []
    },
    {
        imageSrc: four,
        title: 'Sorting Algorithms Visualization',
        description: 'This web app was built using React JS to visualize ' +
            'different sorting algorithms in action. This project was done to ' +
            'learn classic sorting algorithms and also improve my React skills ' +
            'Algorithms includes Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, ' +
            'Quick Sort, Heap Sort and Shell Sort.',
        demoUrl: "",
        identifier: []
    },
];

export default portfolios;
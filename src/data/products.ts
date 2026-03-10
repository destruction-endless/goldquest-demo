import placeholder from "../assets/placeholders/product-placeholder.svg";

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Laboratory Centrifuge R17",
    image: placeholder,
    description:
      "High-speed centrifuge designed for clinical laboratory applications.",
    category: "Hematology",
  },
  {
    id: 2,
    name: "Automated Hematology Analyzer H500",
    image: placeholder,
    description:
      "Advanced hematology analyzer providing fast and accurate blood analysis.",
    category: "Hematology",
  },
  {
    id: 3,
    name: "Clinical Chemistry Reagent Kit",
    image: placeholder,
    description:
      "Reliable reagent kit used for clinical chemistry diagnostic testing.",
    category: "Chemistry",
  },
  {
    id: 4,
    name: "Biochemistry Analyzer BX200",
    image: placeholder,
    description:
      "Automated biochemistry analyzer designed for hospital laboratories.",
    category: "Chemistry",
  },
  {
    id: 5,
    name: "Digital Laboratory Microscope",
    image: placeholder,
    description:
      "Precision microscope for biological observation and laboratory research.",
    category: "Microscopes",
  },
  {
    id: 6,
    name: "Binocular Compound Microscope",
    image: placeholder,
    description:
      "High-resolution compound microscope for educational and clinical use.",
    category: "Microscopes",
  },
  {
    id: 7,
    name: "Microbiology Incubator MI-100",
    image: placeholder,
    description:
      "Temperature-controlled incubator designed for microbiological cultures.",
    category: "Microbiology",
  },
  {
    id: 8,
    name: "Laboratory Autoclave Sterilizer",
    image: placeholder,
    description:
      "Efficient steam sterilization system used for laboratory instruments.",
    category: "Microbiology",
  },
  {
    id: 9,
    name: "ELISA Microplate Reader",
    image: placeholder,
    description:
      "High-performance microplate reader used in immunology testing.",
    category: "Immunology",
  },
  {
    id: 10,
    name: "ELISA Washer System",
    image: placeholder,
    description:
      "Automated ELISA plate washer ensuring accurate immunoassay results.",
    category: "Immunology",
  },
  {
    id: 11,
    name: "Coagulation Analyzer CA-100",
    image: placeholder,
    description: "Automated analyzer for precise blood coagulation testing.",
    category: "Coagulation",
  },
  {
    id: 12,
    name: "Semi-Automatic Coagulation Analyzer",
    image: placeholder,
    description: "Reliable semi-automatic coagulation testing instrument.",
    category: "Coagulation",
  },
  {
    id: 13,
    name: "Laboratory Pipette Set",
    image: placeholder,
    description:
      "Precision adjustable pipettes for laboratory liquid handling.",
    category: "Laboratory Consumables",
  },
  {
    id: 14,
    name: "Disposable Test Tubes Pack",
    image: placeholder,
    description:
      "High-quality disposable test tubes for laboratory diagnostics.",
    category: "Laboratory Consumables",
  },
  {
    id: 15,
    name: "Microscope Glass Slides",
    image: placeholder,
    description: "Premium microscope slides for laboratory sample preparation.",
    category: "Laboratory Consumables",
  },
  {
    id: 16,
    name: "Laboratory Vortex Mixer",
    image: placeholder,
    description:
      "Compact vortex mixer used for rapid mixing of laboratory samples.",
    category: "Chemistry",
  },
  {
    id: 17,
    name: "Blood Sample Collection Tubes",
    image: placeholder,
    description:
      "Sterile blood collection tubes for hematology and clinical testing.",
    category: "Hematology",
  },
  {
    id: 18,
    name: "Digital Laboratory Balance",
    image: placeholder,
    description: "High-precision digital balance for laboratory measurements.",
    category: "Chemistry",
  },
];

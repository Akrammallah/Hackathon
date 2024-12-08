
interface SectionHeadingProps {
  title: string;
  linkText?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, linkText }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {linkText && (
        <a href="#" className="text-blue-500 hover:underline">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default SectionHeading;
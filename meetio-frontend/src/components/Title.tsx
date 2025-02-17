interface TitleProps {
    title: string;
    subtitle?: string;
  }
  
  const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    return (
      <div className="flex justify-center">
        <div className="text-center md:w-[480px] md:mx-auto">
          <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-3">{title}</h2>
          {subtitle && (
            <p className="text-black/50 mb-3 text-base md:text-[20px] font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default Title;
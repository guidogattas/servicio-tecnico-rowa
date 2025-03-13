const InfoItem = ({ iconSrc, title, description }) => (
    <div className="flex flex-col items-center max-w-xs text-center">
        <img width="50" height="50" src={iconSrc} alt={title} />
        <p className="text-xl font-bold">{title}</p>
        <p>{description}</p>
    </div>
);

export default InfoItem;
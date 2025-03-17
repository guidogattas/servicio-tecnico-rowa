const Card = ({ backgroundColor, textColor, title, description, logo }) => (
    <div
        className={`flex flex-col items-center justify-center flex-1 p-5 font-bold text-center ${backgroundColor} ${textColor}`}
    >
        <img className="mb-4" width="50" height="50" src={logo} alt="present" style={{ filter: "invert(50%) sepia(100%) saturate(500%)" }} />
        <div className="flex items-center justify-center">
            <h3 className={`text-center mb-0 ${textColor}`}>{title}</h3>
        </div>
        <p className="text-sm center text-">{description}</p>
    </div>
);

export default Card;

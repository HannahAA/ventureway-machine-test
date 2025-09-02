// This is purely a container component to give required padding.

const Container = ({ children, className = "" }) => {
    return (
        <div className={`px-[32px] lg:px-[138px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;
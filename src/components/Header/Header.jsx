import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
            <nav className='flex justify-between items-center border-b-2 pb-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>knowledge-cafe</h1>
                <img src={profile} alt="" />
            </nav>
    );
};

export default Header;
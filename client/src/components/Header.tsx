const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold text-orange-400'>SkillMentor 🚀</h1>
            <nav className="bg-orange-400 p-3 grid grid-flow-col gap-10 text-white font-bold">
                <button>Home</button>
                <button>About</button>
                <button>Log In</button>
                <button>Sign In</button>
            </nav>
        </header>
    )
}

export default Header;

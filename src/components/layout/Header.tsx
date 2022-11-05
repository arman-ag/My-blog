import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from '../Button';
import ThemeToggle from './ThemeToggle';
const Header = ({ openMenu, setOpenMenu }: any) => {
  const { language, originalPath } = useI18next();
  const menuStatus = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };
  return (
    <header className={`${openMenu && `sticky top-0 bg-primary z-10`}`}>
      <nav>
        <div className="  p-3 md:p-0 flex justify-between items-baseline`` relative">
          <div className="flex items-center	  md:basis-1/6 md:start ">
            <div className="flex items-center  ">
              <span className="mx-5 ">
                {language === 'en' ? (
                  <Link to={originalPath} language={'fa'}>
                    <span className="text-xl mr-1">FA</span>
                    <span className="text-base">🇮🇷</span>
                  </Link>
                ) : (
                  <Link to={originalPath} language={'en'}>
                    <span className="text-xl mr-1">EN</span>
                    <span className="text-base">🇬🇧</span>
                  </Link>
                )}
              </span>

              <ThemeToggle />
            </div>
          </div>

          <div className="  justify-end  flex  p-2  md:basis-1/6 md:mx-5">
            <div className="hidden justify-between basis-44 md:flex ">
              <Button href={'/'}>
                <Trans>header.home</Trans>
              </Button>
              <Button href={'/resume/jobs'}>
                <Trans>header.about-me</Trans>
              </Button>
              {/* <Button>
              <Trans>header.projects</Trans>
            </Button> */}
              {language === 'en' ? null : (
                <Button href={'/blog'}>
                  <Trans>header.blog</Trans>
                </Button>
              )}
            </div>

            <Button onClick={menuStatus} styles=" md:hidden z-10 mx-2 ">
              {openMenu ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* <img
            style={{ top: '-5rem' }}
            alt="main-logo"
            className={`absolute w-80  ${language === 'en' ? 'right-4' : 'left-4'}`}
            src="/logo/logo3.png"
          /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

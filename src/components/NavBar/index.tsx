import React, { type FC, useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { cvDownloadName, cvUrl, menu, sectionIds } from '@/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollPast } from '@/hooks/useScrollPast';
import ThemeToggle from '@/components/ThemeToggle';
import { Styles } from './styles';

interface INavBarProps {
  onToggle: () => void;
}

const NavBar: FC<INavBarProps> = ({ onToggle }) => {
  const scrolled = useScrollPast(64);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Stack component='header' sx={[Styles.root, scrolled && Styles.scrolled]}>
      <Box component='a' href='#home' onClick={closeMenu} sx={Styles.brand}>
        {'Mohammed'}
      </Box>

      <Stack component='nav' aria-label='Main' sx={[Styles.links, Styles.desktop]}>
        {menu.map((link) => (
          <Box
            key={link.label}
            component='a'
            href={link.href}
            sx={[Styles.link, active === link.id && Styles.linkActive]}
          >
            {link.label}
          </Box>
        ))}
      </Stack>

      <Stack sx={[Styles.actions, Styles.desktop]}>
        <ThemeToggle onToggle={onToggle} />
        <Box
          component='a'
          href={cvUrl}
          target='_blank'
          rel='noopener noreferrer'
          sx={Styles.action}
        >
          {'View CV'}
        </Box>
        <Box component='a' href={cvUrl} download={cvDownloadName} sx={Styles.action}>
          {'Download CV'}
        </Box>
      </Stack>

      <Box
        component='button'
        type='button'
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        sx={Styles.burger}
      >
        {[0, 1, 2].map((line) => (
          <Box key={line} sx={Styles.burgerLine(menuOpen, line)} />
        ))}
      </Box>

      <Stack sx={Styles.drawer(menuOpen)} aria-hidden={!menuOpen}>
        <Stack component='nav' aria-label='Mobile' sx={Styles.drawerGroup}>
          {menu.map((link) => (
            <Box
              key={link.label}
              component='a'
              href={link.href}
              onClick={closeMenu}
              sx={[Styles.drawerItem, active === link.id && Styles.drawerItemActive]}
            >
              {link.label}
            </Box>
          ))}
        </Stack>
        <Stack sx={[Styles.drawerGroup, Styles.drawerFooter]}>
          <Box
            component='a'
            href={cvUrl}
            target='_blank'
            rel='noopener noreferrer'
            onClick={closeMenu}
            sx={Styles.drawerItem}
          >
            {'View CV'}
          </Box>
          <Box
            component='a'
            href={cvUrl}
            download={cvDownloadName}
            onClick={closeMenu}
            sx={Styles.drawerItem}
          >
            {'Download CV'}
          </Box>
          <Stack sx={[Styles.drawerItem, Styles.drawerTheme]}>
            <Box sx={Styles.drawerLabel}>{'Colour mode'}</Box>
            <ThemeToggle onToggle={onToggle} />
          </Stack>
        </Stack>
      </Stack>

      {menuOpen && (
        <Box
          component='button'
          type='button'
          aria-label='Close menu'
          onClick={closeMenu}
          sx={Styles.backdrop}
        />
      )}
    </Stack>
  );
};

export default NavBar;

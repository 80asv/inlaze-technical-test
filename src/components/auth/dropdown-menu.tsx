import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LogOut, UserCircle } from 'iconoir-react';
import styles from '@/src/styles/DropDownMenu.module.css';
import { removeNextCookie } from '@/src/utils/removeNextCookie';

const DropdownMenuComponent = ({ auth }) => {


  const logout = () => {
    removeNextCookie('token');
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.IconButton} aria-label="Customise options">
          <UserCircle />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5} align='end'>
          <DropdownMenu.Label className={styles.DropdownMenuLabel}>
            Your Account <br />
            <span>
              {auth?.email}
            </span>
          </DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.DropdownMenuItem} onClick={logout}>
            <LogOut />
            Logout
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuComponent;
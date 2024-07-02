import {useState, useEffect} from 'react';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import {useSearchParams} from 'react-router-dom';

function MenuSearchResult() {

    const [menuList, setMenuList] = useState([]);

    /*  */


    return(
        <>
            <h1>메뉴 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default MenuSearchResult;
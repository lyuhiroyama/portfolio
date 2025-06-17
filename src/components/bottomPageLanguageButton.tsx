import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";






export default function BottomPageLanguageButton() {
    const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const { i18n } = useTranslation();
    const toggleLangDropdown = () => {
        setIsLangDropdownVisible(!isLangDropdownVisible);
    };

    return (
        <div className="bottom-language-button-component">
            <button 
                className={isLangDropdownVisible ? "open" : ""}
                onClick={toggleLangDropdown}
            >
                Languages ▾
            </button>
            {isLangDropdownVisible && (
                <ul className="language-dropdown" ref={dropdownRef}>
                    <li
                        className="dropdown-li"
                        onClick={() =>
                            i18n.changeLanguage('en')
                        }
                    >
                        English
                    </li>
                    <li
                        className="dropdown-li"
                        onClick={() =>
                            i18n.changeLanguage('ja')
                        }
                    >
                        日本語
                    </li>
                </ul>
            )}
        </div>
    );
}

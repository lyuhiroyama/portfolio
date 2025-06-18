import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BottomPageLanguageButton() {
    const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const { i18n, t } = useTranslation();

    const toggleLangDropdown = () => {
        setIsLangDropdownVisible(!isLangDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsLangDropdownVisible(false);
            }
        }

        if (isLangDropdownVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isLangDropdownVisible]);

    return (
        <div className="bottom-language-button-component">
            <div className="bottom-language-button-container">
                <button 
                    className={isLangDropdownVisible ? "open" : ""}
                    onClick={toggleLangDropdown}
                >
                    {t('switch_languages_mobile')}
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
        </div>
    );
}

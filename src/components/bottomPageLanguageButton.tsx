import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BottomPageLanguageButton() {
    const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const { i18n } = useTranslation();

    const toggleLangDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLangDropdownVisible(!isLangDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
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
                    ref={buttonRef}
                    className={isLangDropdownVisible ? "open" : ""}
                    onClick={(e) => toggleLangDropdown(e)}
                >
                    {i18n.language === "en" ? "English ▾" : "日本語 ▾"}
                </button>
                {isLangDropdownVisible && (
                    <ul className="language-dropdown" ref={dropdownRef}>
                        {i18n.language !== "en" && (
                            <li
                                className="dropdown-li"
                                onClick={() => {
                                    i18n.changeLanguage('en');
                                    setIsLangDropdownVisible(false);
                                }}
                            >
                                English
                            </li>
                        )}
                        {i18n.language !== "ja" && (
                            <li
                                className="dropdown-li"
                                onClick={() => {
                                    i18n.changeLanguage('ja');
                                    setIsLangDropdownVisible(false);
                                }}
                            >
                                日本語
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

import { JSX, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQ, faA, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
    question: string;
    answer: string | JSX.Element;
}

export default function Dropdown({ question, answer }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown-component">
          <div 
            className="dropdown-header" 
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon className="faQ" icon={faQ} />
            <div className="dropdown-question">{question}</div>
            <span className={`dropdown-status ${open ? 'open' : ''}`}>
                <FontAwesomeIcon className="faPlus" icon={faPlus} />
                <FontAwesomeIcon className="faMinus" icon={faMinus} />
            </span>
          </div>
          {open && (
            <div className={`dropdown-content ${open ? 'open' : ''}`}>
              <FontAwesomeIcon className="faA" icon={faA} />
              <div className="dropdown-answer">{answer}</div>
            </div>
          )}
        </div>
      );
}
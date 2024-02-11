import './FormControl.scss'

type InputType = 'text' | 'tel' | 'email' | 'password' | 'number' | 'date' | 'time' | 'file';


interface PropsInput {
  name: string;
  id: string;
  label?: string;
  className?: string;
  classNameGroup?: string;
  required?: boolean;
}

interface PropsInputField extends PropsInput {
  type: InputType;
  placeholder?: string;
  value?: string;
}

interface PropsInputTextArea extends PropsInput {
  placeholder?: string;
  value?: string;
}

interface PropsInputSelect extends PropsInput {
  options: {value: string, label: string}[];
  value?: string;
}


function FormControl(props: PropsInputField) {
  const { label, value, type, name, id, placeholder, className, classNameGroup, required } = props;
  return (
    <div 
    className={classNameGroup ? classNameGroup : "form-group"}>
        {label ? <label htmlFor={id}>{label}</label> : null }
        <input 
          type={type} 
          name={name} 
          id={id} 
          {...placeholder ? {placeholder: placeholder} : null}
          {...className ? {className: className} : null}
          {...value ? {value: value} : null}
          {...required ? {required: true} : null}
        />
    </div>
  );
}

function FormTextArea(props: PropsInputTextArea) {
  const { label, value, name, id, placeholder, className, classNameGroup, required } = props;
  return (
    <div 
    className={classNameGroup ? classNameGroup : "form-group"}>
        {label ? <label htmlFor={id}>{label}</label> : null }
        <textarea 
          name={name} 
          id={id} 
          {...placeholder ? {placeholder: placeholder} : null}
          {...className ? {className: className} : null}
          {...value ? {value: value} : null}
          {...required ? {required: true} : null}
        />
    </div>
  );
}



function FormSelect(props: PropsInputSelect) {
  const { label, value, name, id, className, classNameGroup, required, options } = props;
  return (
    <div className={classNameGroup ? classNameGroup : "form-group"}>
        {label ? <label htmlFor={id}>{label}</label> : null }
        <select 
          name={name} 
          id={id} 
          {...className ? {className: className} : null}
          {...value ? {value: value} : null}
          {...required ? {required: true} : null}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    </div>
  );
}

export { FormControl, FormTextArea, FormSelect }


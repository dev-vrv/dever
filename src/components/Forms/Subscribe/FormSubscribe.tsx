import './FormSubscribe.scss'
import { FormControl } from "../../FormControl/FormControl";

interface FormProps {
    method: 'POST' | 'GET';
    action?: string;
    className?: string;
}

const emailProps = {
    name:'email' ,
    type:'email' as 'email',
    id:'footer-email' ,
    label:'subscribe to our newsletter' ,
    placeholder:'Your Email*',
    required: true,
}

export default function FormSubscribe(props: FormProps) {
    const { method, action, className } = props;
    return (
        <form action={action? action : '#'} method={method} className={`${className? className : 'form-subscribe'}`}>
            <FormControl {...emailProps} />
            <button type='submit'>Send</button>
        </form>
    )
}
import { FormControl, FormTextArea, FormSelect } from '../../FormControl/FormControl';

export default function ContactForm() {
    const FiedsProps = {
        classNameGroup: 'form-group',
    }
    const EmailProps = {
        ...FiedsProps,
        name: 'email',
        id: 'email',
        type: 'email' as 'email',
        placeholder: 'Your email *',
        required: true,
    }
    const NameProps = {
        ...FiedsProps,
        name: 'name',
        id: 'name',
        type: 'text' as 'text',
        placeholder: 'Your name *',
        required: true,
    }
    const PhoneProps = {
        ...FiedsProps,
        name: 'phone',
        id: 'phone',
        type: 'tel' as 'tel',
        placeholder: 'Your phone *',
        required: true,
    }
    const CompanyProps = {
        ...FiedsProps,
        name: 'company',
        id: 'company',
        type: 'text' as 'text',
        placeholder: 'Your company',
    }
    const TitleProps = {
        ...FiedsProps,
        name: 'title',
        id: 'title',
        type: 'text' as 'text',
        placeholder: 'Title',
    }
    const TextAreaProps = {
        ...FiedsProps,
        name: 'message',
        id: 'message',
        placeholder: 'Message *',
        required: true,
    }

    const ProjectTypeProps = {
        ...FiedsProps,
        name: 'project-type',
        id: 'project-type',
        options: [
            {value: '', label: 'Project  Type'},
            {value: 'Web Development', label: 'Web Development'},
            {value: 'Mobile Development', label: 'Mobile Development'},
            {value: 'UI/UX Design', label: 'UI/UX Design'},
            {value: 'Other', label: 'Other'},
        ],
    }

    const BudgetProps = {
        ...FiedsProps,
        name: 'project-type',
        id: 'project-type',
        options: [
            {value: '', label: 'Your Budget'},
            {value: '1', label: '10K'},
            {value: '2', label: '10-20K'},
            {value: '3', label: '20-30K'},
            {value: '4', label: '30-40K'},
        ],
    }

    return (
      <form className="container contacts__form py-5" id="contact-form" method='POST'>
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8s">
                    <h1 className="display-3">
                        For any enquiries, or to say hello, get in touch 👋
                    </h1>
                </div>
            </div>

            <div className="row g-5 mt-5">
                <div className="col-4">
                    <div className="d-flex flex-column gap-1">
                        <h4 className="h4 py-2">Contact info:</h4>
                        <p className='d-flex gap-2'>
                            <span>Email:</span>
                            <a href="mailto:dev.vrv@gmail.com" className='link-secondary'>dev.vrv@gmail.com</a>
                        </p>
                        <p className='d-flex gap-2'>
                            <span>Email:</span>
                            <a href="callto:+996550337683" className='link-secondary'>+996 550 337 683</a>
                        </p>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <h4 className="h4 py-2">Address:</h4>
                        <p className='d-flex gap-2'>
                            <span>Moscow 217 st.</span>
                        </p>
                        <p className='d-flex gap-2'>
                            <span>Bishkek City, KG</span>
                        </p>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <h4 className="h4 py-2">Hours of Operation:</h4>
                        <p className='d-flex gap-2'>
                            <span>Monday - Synday</span>
                        </p>
                        <p className='d-flex gap-2'>
                            <span>9:00 am - 7:30 pm</span>
                        </p>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row g-5">
                        <div className="col-6">
                            <FormControl {...NameProps} />
                        </div>
                        <div className="col-6">
                            <FormControl {...EmailProps} />
                        </div>
                        <div className="col-6">
                            <FormControl {...PhoneProps} />
                        </div>
                        <div className="col-6">
                            <FormControl {...CompanyProps} />
                        </div>

                        <div className="col-6">
                            <FormSelect {...ProjectTypeProps} />
                        </div>
                        <div className="col-6">
                            <FormSelect {...BudgetProps} />
                        </div>

                        <div className="col-12">
                            <FormControl {...TitleProps} />
                        </div>
                        <div className="col-12">
                            <FormTextArea {...TextAreaProps} />
                        </div>
                        
                        <div className="col-12">
                            <button type='submit' className='btn btn-lg btn-dark'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
      </form>
    );
}
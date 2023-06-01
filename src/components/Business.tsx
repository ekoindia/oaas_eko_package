import React, { useState } from 'react';
import ButtonGlobal from './Common/ButtonGlobal';
import InputGlobal from './Common/InputGlobal';
import Labelglobal from './Common/Labelglobal';
import { GlobalStepPropsType } from '../utils/globalInterfaces.ts/stepsInterface';
import { useStore } from '../store/zustand';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    // shopName: Yup.string().required('Required'),
    // name: Yup.string().required('Required'),
    authorized_signatory_name: Yup.string().required('Required'),
    contact_person_cell: Yup.string().required('Required'),
    current_address_pincode: Yup.string().required('Required'),
    current_address_district: Yup.string().required('Required')
    // state: Yup.string().required('Required')
});

const companyTypeData = [
    { label: 'Private Ltd', value: 1 },
    { label: 'LLP', value: 2 },
    { label: 'Partnership', value: 3 },
    { label: 'Sole Proprietorship', value: 4 }
];

const Business = ({ stepData, handleSubmit, isDisabledCTA = false, shopTypes = [], stateTypes = [] }: GlobalStepPropsType) => {
    const { steps, currentStep, setCompleted, setCurrentStepPlus } = useStore();
    const [formValues, setFormValues] = useState({
        // shopType: 'shop1',
        // shopName: '',
        name: '',
        alternate_mobile: '',
        company_type: 1,
        authorized_signatory_name: '',
        contact_person_cell: '',
        current_address_line1: '',
        current_address_line2: '',
        current_address_pincode: '',
        current_address_district: '',
        current_address_state: ''
    });
    console.log('state types in business', stateTypes);
    return (
        <>
            <Formik
                initialValues={formValues}
                validationSchema={SignupSchema}
                onSubmit={(formData) => {
                    handleSubmit({ ...stepData, form_data: formData, stepStatus: 3 });
                    console.log('this is form data', formData);
                }}
            >
                {({ errors, touched, values, handleChange }) => (
                    <Form className="bg-white mt-4 min-[640px]:ml-6 w-full min-[640px]:mr-3 xl:mr-6 sm:mr-0 sm:ml-0">
                        <div className="mt-8 text-black text-lg mb-4 font-bold">Business Type</div>
                        <div className="xl:grid xl:grid-cols-2 sm:flex sm:flex-col gap-4 xl:w-full">
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Company/Firm's name</Labelglobal>
                                <InputGlobal className="busin_drpdwn_input" name="name" value={values.name} onChange={handleChange('name')} id="username" type="text" placeholder="" />
                                {errors.name && touched.name ? <div className="text-red">{errors.name}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Alternate mobile number(optional)</Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="alternate_mobile"
                                    value={values.alternate_mobile}
                                    onChange={handleChange('alternate_mobile')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Company Type</Labelglobal>
                                <select
                                    name="company_type"
                                    value={values.company_type}
                                    onChange={handleChange('company_type')}
                                    className="px-0.5 py-[7px] border-2 border-gray-800 w-full rounded-md bg-white border-gray"
                                >
                                    {companyTypeData.map((company, idx) => {
                                        return (
                                            <option value={company.value} key={`${idx}_${company.value}`}>
                                                {company.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Director/Authorised Signatory Full Name</Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="authorized_signatory_name"
                                    value={values.authorized_signatory_name}
                                    onChange={handleChange('authorized_signatory_name')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                                {errors.authorized_signatory_name && touched.authorized_signatory_name ? <div className="text-red">{errors.authorized_signatory_name}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Contact Person's Cell Number </Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="contact_person_cell"
                                    value={values.contact_person_cell}
                                    onChange={handleChange('contact_person_cell')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                                {errors.contact_person_cell && touched.contact_person_cell ? <div className="text-red">{errors.contact_person_cell}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Registered Business address(Line1)</Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="current_address_line1"
                                    value={values.current_address_line1}
                                    onChange={handleChange('current_address_line1')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Registered Business address(Line2)</Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="current_address_line2"
                                    value={values.current_address_line2}
                                    onChange={handleChange('current_address_line2')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">Pincode</Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="current_address_pincode"
                                    value={values.current_address_pincode}
                                    onChange={handleChange('current_address_pincode')}
                                    id="username"
                                    type="number"
                                    max="999999"
                                    placeholder=""
                                />
                                {errors.current_address_pincode && touched.current_address_pincode ? <div className="text-red">{errors.current_address_pincode}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">City</Labelglobal>
                                <InputGlobal
                                    className="busin_drpdwn_input"
                                    name="current_address_district"
                                    value={values.current_address_district}
                                    onChange={handleChange('current_address_district')}
                                    id="username"
                                    type="text"
                                    placeholder=""
                                />
                                {errors.current_address_district && touched.current_address_district ? <div className="text-red">{errors.current_address_district}</div> : null}
                            </div>
                            <div>
                                <Labelglobal className="block text-black text-sm font-bold mb-2">State</Labelglobal>
                                <select
                                    name="current_address_state"
                                    value={values.current_address_state}
                                    onChange={handleChange('current_address_state')}
                                    className="px-0.5 py-[7px] border-2 border-gray-800 w-full rounded-md bg-white border-gray"
                                >
                                    {stateTypes.map((state, idx) => {
                                        return (
                                            <option value={state.value} key={`${idx}_${state.value}`}>
                                                {state.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <ButtonGlobal className="welcome_btn" disabled={isDisabledCTA}>
                            {isDisabledCTA ? 'Loading...' : stepData?.primaryCTAText}
                        </ButtonGlobal>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Business;

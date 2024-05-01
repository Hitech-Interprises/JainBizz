import React, { useState } from 'react'

const Terms1 = () => {
    const [showTermsPopup, setShowTermsPopup] = useState(true);

    const handleDisagree = () => {
        setShowTermsPopup(false);
    };

    const handleAgree = () => {
        setShowTermsPopup(false);
    };

    return (
        <div>
            {showTermsPopup && (
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="flex items-end justify-center text-center">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class='bg-gray-100 px-4 py-3 sm:flex justify-center sm:px-6'>
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Terms And Conditions</h3>
                            </div>
                            <div class="bg-white h-96 px-4 overflow-auto">
                                <div class="sm:flex sm:items-start">
                                    <div class=" text-center  sm:text-left">
                                        <div class="mt-2 mb-2">
                                            <p class="text-sm text-gray-500 mb-2">
                                                Introduction
                                                These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.

                                                These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

                                                Minors or people below 18 years old are not allowed to use this Website.

                                                Intellectual Property Rights
                                                Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

                                                You are granted limited license only for purposes of viewing the material contained on this Website.

                                                Restrictions
                                                You are specifically restricted from all of the following:

                                                publishing any Website material in any other media;
                                                selling, sublicensing and/or otherwise commercializing any Website material;
                                                publicly performing and/or showing any Website material;
                                                using this Website in any way that is or may be damaging to this Website;
                                                using this Website in any way that impacts user access to this Website;
                                                using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
                                                engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
                                                using this Website to engage in any advertising or marketing.
                                                Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.

                                                Your Content
                                                In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

                                                Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.

                                                No warranties
                                                This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.

                                                Limitation of liability
                                                In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.

                                                Indemnification
                                                You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.

                                                Severability
                                                If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

                                                Variation of Terms
                                                Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.

                                                Assignment
                                                The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.

                                                Entire Agreement
                                                These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.

                                                Governing Law & Jurisdiction
                                                These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                    <div class="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 sm:ml-3 sm:w-auto" onClick={handleAgree}>Agree</button>
                                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={handleDisagree}>Disagree</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Terms1

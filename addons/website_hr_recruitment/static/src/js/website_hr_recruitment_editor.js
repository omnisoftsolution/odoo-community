/** @odoo-module **/

import core from "web.core";
import FormEditorRegistry from "website.form_editor_registry";

const _lt = core._lt;

FormEditorRegistry.add('apply_job', {
    formFields: [{
        type: 'char',
        modelRequired: true,
        name: 'partner_name',
        fillWith: 'name',
        string: _lt('Your Name'),
    }, {
        type: 'email',
        required: true,
        fillWith: 'email',
        name: 'email_from',
        string: _lt('Your Email'),
    }, {
        type: 'char',
        required: true,
        fillWith: 'phone',
        name: 'partner_mobile',
        string: _lt('Phone Number'),
    }, {
        type: 'char',
        name: 'linkedin_profile',
        string: _lt('LinkedIn Profile'),
    }, {
        type: 'text',
        name: 'description',
        string: _lt('Short Introduction'),
    }, {
        type: 'binary',
        custom: true,
        name: 'Resume',
    }],
    fields: [{
        name: 'job_id',
        type: 'many2one',
        relation: 'hr.job',
        string: _lt('Applied Job'),
    }, {
        name: 'department_id',
        type: 'many2one',
        relation: 'hr.department',
        string: _lt('Department'),
    }],
    successPage: '/job-thank-you',
});

module.exports = plop => {
    plop.setGenerator('atom', {
        description: 'Create a atom',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your atom name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/atoms/{{pascalCase name}}/{{pascalCase name}}.jsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.js.hbs',
                // Add prefix in className
                data: { prefix: 'a' }
            },
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/atoms/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.scss.hbs',
                // Add prefix in className
                data: { prefix: 'a' }
            }
        ],
    });
    plop.setGenerator('molecule', {
        description: 'Create a molecule',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your molecule name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/molecules/{{pascalCase name}}/{{pascalCase name}}.jsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.js.hbs',
                // Add prefix in className
                data: { prefix: 'm' }
            },
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/molecules/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.scss.hbs',
                // Add prefix in className
                data: { prefix: 'm' }
            },
        ],
    });
    plop.setGenerator('organism', {
        description: 'Create a organism',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your organism name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/organisms/{{pascalCase name}}/{{pascalCase name}}.jsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.js.hbs',
                // Add prefix in className
                data: { prefix: 'o' }
            },
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/organisms/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.scss.hbs',
                // Add prefix in className
                data: { prefix: 'o' }
            },
        ],
    });
    plop.setGenerator('template', {
        description: 'Create a template',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your template name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/templates/{{pascalCase name}}/{{pascalCase name}}.jsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.js.hbs',                
                // Add prefix in className
                data: { prefix: 't' }
            },
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/templates/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.scss.hbs',                
                // Add prefix in className
                data: { prefix: 't' }
            },
        ],
    });
    plop.setGenerator('page', {
        description: 'Create a page',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your pages'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.js.hbs',
                // Add prefix in className
                data: { prefix: 'p' }
            },
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Atomic.scss.hbs',
                // Add prefix in className
                data: { prefix: 'p' }
            },
        ],
    });
};
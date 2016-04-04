<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/roganoalien/repos/experiments/carne-y-hueso/user/plugins/error/blueprints.yaml',
    'modified' => 1456431550,
    'data' => [
        'name' => 'Error',
        'version' => '1.4.1',
        'description' => 'Displays the error page.',
        'icon' => 'warning',
        'author' => [
            'name' => 'Team Grav',
            'email' => 'devs@getgrav.org',
            'url' => 'http://getgrav.org'
        ],
        'homepage' => 'https://github.com/getgrav/grav-plugin-error',
        'keywords' => 'error, plugin, required',
        'bugs' => 'https://github.com/getgrav/grav-plugin-error/issues',
        'license' => 'MIT',
        'form' => [
            'validation' => 'strict',
            'fields' => [
                'enabled' => [
                    'type' => 'toggle',
                    'label' => 'Plugin status',
                    'highlight' => 1,
                    'default' => 0,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ],
                'routes.404' => [
                    'type' => 'text',
                    'size' => 'medium',
                    'label' => '404 Route',
                    'default' => '/error'
                ]
            ]
        ]
    ]
];

(Some rough notes on how I kicked off the project, so I don't forget later. -s9)

# Installed Node and Raneto module.

At the command line, using Homebrew since I'm on a Mac:

    % brew update
    % brew install node
    % npm install -g raneto

# Installed Eclipse.

Downloaded and installed a fresh copy of Eclipse IDE for Java Developers 4.5.

Then used the Eclipse Marketplace to install Nodeclipse 1.0.1.

# Create master and local repositories.

Created new repository on GitHub:

    Owner:                  concilium
    Repository Name:        aion
    Description:			The Aion RPG.
    Visibility:             Public
    Initialize w/README:    (checked)
    Add .gitignore:         Node
    Add a license:          BSD 2-Clause “Simplified” License

Used SourceTree to clone a local copy:

    Source URL:             git@github.com:concilium/aion.git
    Destination Path:       /Users/mgsimpson/Desktop/Personal/Projects/s9-concilium-aion
    Name:                   s9-concilium-aion

Inside SourceTee, initialized with “Git Flow”, accepting defaults.

Started a new feature, “initial_integration”.

# Integrated Raneto framework.

Set up Aion module repository using NPM:

    % cd /Users/mgsimpson/Destop/Personal/Projects/s9-concilium-aion
    % npm init

        Name:               aion
        Version:            0.1.00        Description:        The Aion RPG.        Entry Point:        index.jss        Test Command:       (left blank))        Git Repository:     https://github.com/concilium/aion.gitt        Keywords:           (left blank))        Author:             Mike Simpson <stendhal9@white-knight.org>>        License:            BSD-2-Clausee
Pulled Aion project into Eclipse using “New -> Project -> General”; then used
“Share Project” to pick up the Git aspect; then switched to the “Node” perspective..
Started by pulling “example” files from Raneto repo on GitHub, customizing a bit,
and then iterating until a running server could be obtained..

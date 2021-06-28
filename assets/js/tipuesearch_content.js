var tipuesearch = {
  "pages": [
    {
      "title": "About 2021 Hack Week",
      "text": "Plasma Hack Week 2021\nWelcome to the inaugural Plasma Hack Week!!  Our first event will be held \nremotely from June 28 - July 2, 2021.  The event is free and sets out to \nincrease awareness of open-source software for the Plasma Community:\nthe benefits it can have on the community, what is currently available, and\nhow to foster community development of open-source software.  As such, topics will\nrange from demonstrating and using current open-source plasma software projects\nto software engineering skills.  These topics will be presented through both\nstructured learning activities, such as guided tutorials, and unstructured project\ntime for collaborative learning.\nIn the week leading up to the Plasma Hack Week, a few more fundamentally\nfocused tutorials will be presented on topics like the basics of Python, using \nversion control, contributing to open-source projects, etc.\nFor information on registering please visit our \nregistration page.\nFor information on the schedule and pre-week tutorials please visit our\nscheduling page.\nFor any additional questions please reach out to us on our \nDiscord channel.",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/about/"
    },
    {
      "title": "2021 Hack Week Organizing Committee",
      "text": "Plasma Hack Week 2021: Organizing Committee\n\n\n\n\n\n\n        \n            \n    \n    \n        \n            \n                Erik T. Everson\n                University of California, Los Angeles\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Valentina Marascu, PhD\n                National Institute for Lasers, Plasma and Radiation Physics\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Nick Murphy\n                Center for Astrophysics | Harvard & Smithsonian\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Ramiz Qudsi\n                University of Delaware\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                David A. Schaffner\n                Bryn Mawr College\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Sterling P. Smith\n                General Atomics\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Dominik Sta\u0144czak\n                Institute of Plasma Physics and Laser Microfusion\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Steve Vincena\n                University of California, Los Angeles\n            \n        \n    \n\n        \n        \n            \n    \n    \n        \n            \n                Stephanie Yirui Yang\n                United Kingdom",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/committee/"
    },
    {
      "title": "Software Installation for Plasma Hack Week",
      "text": "Software Installation for Plasma Hack Week\nThis page contains instructions for installing software to be used\nduring Plasma Hack Week.  In addition, here are installation links for\n\nBOUT++\nGkeyll\nOMFIT\n\ngit\nThere are several ways to obtain git for your specific operating systems.\ngit provides a great download page, https://git-scm.com/downloads, that\noutlines these methods, or provides a direct download when applicable.\nWe also recommend that you create a free GitHub account\nin order to follow along with many of the tutorials.\nPython\nInstallation with Anaconda Navigator (recommended)\nThe following instructions are designed to help us set up a Python\nenvironment with several of the packages to be discussed during the Hack\nWeek.\n\nPlease follow these instructions for\n   installing Anaconda.\n   When this is done, you should have Anaconda Navigator installed.\nCreate a folder on your computer for the Hack Week, which we'll call\n   hackweek.\nDownload this\n   environment.yml\n   file to the hackweek folder.  You might need to use the \"save page\n   as\" option from your web browser menu.\nOpen Anaconda\n   Navigator.\nUnder the \"Home\" tab on Anaconda Navigator, search for and install\n   \"Jupyter Notebook\".\nCreate an Anaconda environment \n   for the Hack Week.\nSelect the \"Environment\" tab.\nBelow the list of environments, click \"Import\".\nClick the file folder icon.\nNavigate to and select the environment.yml (possibly in your\n  Downloads folder).\nClick \"Import\".  \n\n\nUnder the \"Environments\" tab on Anaconda Navigator, find the\n   hackweek environment.  Click on the arrow for that environment, and\n   select the option to \"Open with Jupyter Notebook\".\nAfter Jupyter Notebook opens in your web browser, click on the button\n   for \"New\", and click on \"Python 3\" to open a Python notebook.\n\nTest the installation by typing\nimport plasmapy\n\nand then press shift-Enter to execute the cell.  This should run\nwithout giving any errors.\n\n\nInstallation with conda from the command line\nIf you have a working installation of conda then you can install the \nhackweek environment with the following steps.  \n\nOpen a terminal.\nCreate a folder on your computer for the Hack Week, which we'll call\n   hackweek.  Enter that folder.\n\nDownload the environment.yml file by running \n\nwget https://raw.githubusercontent.com/PlasmaPy/hack-week-2021/main/environment.yml\n\n\n\nRun the following command to create the environment.\n\nconda env create -f environment.yml\n\n\n\nActivate this environment by running\n\nconda activate hackweek\n\n\n\nTest the environment by running\n\njupyter notebook\n\nIn the Jupyter notebook, run\nimport plasmapy\n\n\n\nBinder link\nIf you run into any problems with installation, you can also create a\nBinder environment to access a Python environment from your web browser.\n\nIntegrated development environments\nAn integrated development environment (IDE) is software used for code\ndevelopment.  IDEs typically include a source code editor as well as\nbuilt-in tools for refactoring, version control, running tests, and \ndebugging.  \n\nPyCharm\nCommunity version is free and open source \nTo be used during git & GitHub and clean coding tutorials\nVisual Studio Code\nCommunity version is free and open source \nAtom\nFull version is open source",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/install/"
    },
    {
      "title": "Prequel Python Tutorials",
      "text": "Prequel Python Tutorials\nIn the week before the Hack Week, we hosted two tutorials to\nintroduce Python to students and scientists\nwho are new to Python.  These tutorials were held on Monday, June 21\nand Tuesday, June 22 at 15 UTC (5 pm CEST / 11 am EDT / 8 am PDT).  Each\ntutorial lasted about an hour.  This tutorial was adapted from\nSoftware Carpentry's Programming with Python\ntutorial.\nTo replicate the Python environment for this tutorial, please go to the\nfollowing Binder link.  You can access the Jupyter notebook used for the\ntutorial by opening PythonIntro2021.ipynb.\n\nTentative schedule\nDay 1\n\nPython fundamentals\nReading in data\nNumPy arrays\nPlotting with matplotlib  \n\nDay 2\n\nLoops\nLists\nConditionals\nFunctions\n\nSetup\nTo follow along with these tutorials, you can either install Python on\nyour own computer, or access a Binder link that will create an environment\nautomatically.  \nGetting set up on your own computer\nIf you would like to follow along with the tutorial on your own computer,\nplease follow these instructions.\n\nPlease follow these instructions for\n   installing Anaconda.\n   When this is done, you should have Anaconda Navigator installed.\nCreate a folder called python-intro on your computer.\nDownload python-novice-inflammation-data.zip,\n   and move the file to python-intro.\nUnzip python-novice-inflammation-data.zip into the python-intro\n   folder.\nOpen Anaconda Navigator.\nUnder the \"Home\" tab on Anaconda Navigator, search for and install\n   \"Jupyter Notebook\".\nUnder the \"Environments\" tab on Anaconda Navigator, click on the\n   arrow for the base environment.  Select \"Open terminal\".\nType pip install numpy matplotlib to install the necessary packages\n   and press enter.   \nClick on the arrow for the base environment again. Select the\n   option to \"Open with Jupyter Notebook\".\nNavigate to the python-intro directory, and enter the data\n   sub-directory.\nUnder the \"New\" button (probably near the upper right corner),\n    select \"Python 3\" to open a notebook.   \n\nTest the installation by entering\nimport numpy\nimport matplotlib.pyplot\ndata = numpy.loadtxt(fname='inflammation-01.csv', delimiter=',')\nmatplotlib.pyplot.plot(data)\nmatplotlib.pyplot.show()\n\nPress shift-enter to run the cell.  If you get a fancy plot, you're\nall set!  If you run into any errors, please ask on the \nDiscord channel for the Hack Week\nin the #tutorial-python channel.",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/python/"
    },
    {
      "title": "2021 Hack Week Registration",
      "text": "Plasma Hack Week 2021: Registration\n\n    \n        Registration Form\n    \n\n\nRegistration and attendance for the Plasma Hack Week is completely FREE.\nThe registration form will collect basic info, so we can keep you informed about\nthe Hack Week and tailor topics to your interests, as best as we can, during the\nunstructured sessions.\nThe registration form has an option to propose a lightning talk if you\nare interested in giving one.  A lightning talk is an informal \u223c5 minute\ntalk on any topic of interest to Hack Week participants.  For more \ninformation on lightning talks, see the schedule page.",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/registration/"
    },
    {
      "title": "2021 Hack Week Schedule",
      "text": "Plasma Hack Week 2021: Schedule\nDates: June 28th to July 2nd\nTimes: 11:00 am to 4:00 pm EDT\n\n    \n        Prequel tutorials on scientific Python\n    \n    \n        On Monday, Jun 21 and Tuesday, June 22 at 11:00 am EDT we will be holding\n        some pre- Hack Week tutorials focused on using Python for science.  These\n        tutorials are geared towards participants new to Python.\n    \n    \n        For further details please see the prequel section\n        below and/or the Python tutorial page.\n    \n\n\nEach day of Plasma Hack Week will be filled with structured tutorial\ntime, social time, and unstructured free hacking time.  All pre-planned\nevents will not exceed 5 hours in any given day, and we highly encourage\nany breakout discussions and hack sessions that may be inspired from the\nday's activities.\nThis year's Hack Week will be held from June 28 to July 2.  Each day is divided\ninto two 2-hour sessions split between a social hour, see\nthe schedule below for details.\n\nFirst Session\nThis session is geared towards tutorials and lightning talks with\n the option for any inspired discussions as we move into the social hour.\nSocial Hour\nThe social hour is intended for participants to use as they like, but we\n highly encourage participants to use this time to interact and discuss\n with other participants.  During this time the Hack Week organizers\n will sit in the main meeting to be available for any discussions, but\n we will also have several breakout rooms available.  These breakout\n rooms are so participants can have more focused discussions amongst\n themselves.\nSecond Session\nThe second session is focused more towards open hacking/coding and\n discussions.  The session will start off with a specific topic\n to get the ball rolling and then will be opened up to any topics\n participants are interested in.\n\nDuring the social hour or second session we highly encourage participants\nto schedule additional events.  If this is something you are interested\nin, then please announce and organize it on Discord.  We will do our best\nto facilitate a breakout room for you.\n The schedule\n\n\n\n\n\n\n\n Prequel tutorials on scientific Python\nWe will hold two tutorials to introduce Python to \nparticipants who are new to Python.  These tutorials will be held \nthe week before the Hack Week on Monday, June 21 and Tuesday, June 22 at\n15 UTC (5 pm CEST / 11 am EDT / 8 am PDT).  Each tutorial will last about\none hour.\nTypes of talks\n\n\nTutorials during the Hack Week\nDuring the Hack Week, we will hold a series of interactive tutorials.\nSome of the tutorials will be longer (\u22731 hr) to allow an in-depth\nintroduction to a particular software package or technique.  Likely \ntopics include version control with git/GitHub, how to contribute to an\nopen source software project, getting started with PlasmaPy or OMFIT,\nand writing software tests.  We will also hold shorter tutorials \n(\u223c30 min) that will provide an interactive demonstration of the\nhighlights of a particular software package.\nLightning talks\nA lightning talk is an informal \u223c5 minute talk on any topic of interest\nto Hack Week participants.  Example topics include a short demo of plasma\nsoftware, a hack week project idea, an upcoming event, a suggestion for\nimproving the culture of the plasma software community, something you\nlearned during the Hack Week, an upcoming event, or an idea for plasma\nsoftware that is yet to be developed.  The time allowed for each\nlightning talk will depend on how many people sign up.  There may be\ntime during the Hack Week to request a lightning talk as well.",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/schedule/"
    },
    {
      "title": "Social Events",
      "text": "Plasma Hack Week 2021: Social Events\nSince this year's Hack Week is purely virtual, and as such, we inherently\nlose the social aspect related to in-person events.  In an effort to regain\nsome camaraderie, we're currently scheduling social hours for every\nday of the event and will provide mechanisms so people can split off into\ntheir own working/social groups.  Please stay tuned, and we'll update you\nwith more info.  You can also visit our scheduling page.",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/social/"
    },
    {
      "title": "2021 Hack Week Tutorials",
      "text": "Plasma Hack Week 2021: Tutorials & Presentations\nThe pre- Hack Week Python tutorials can be found on\ntheir dedicated tutorial page.\n\n\n\n\n\n\n        \n            \n    \n    \n        Coordinating Python Development with PyHC\n        Monday, June 28th at 12:10 pm ET\n        Presenter(s): Julie Barnum\n            Co-author(s): Aaron Roberts, Alexandria Ware, and Shawn Polson\n        \n                https://heliopython.org/\n        \n            This presentation serves as an introduction to the Python in Heliophysics Community (PyHC). We'll go over the motivation behind the community, as well as a general layout of how the community is structured and run.\n    \n\n        \n        \n            \n    \n    \n        git and GitHub Tutorial\n        Monday, June 28th at 2:00 pm ET\n        Presenter(s): Erik T. Everson and Sterling Smith\n        \n        \n            In this tutorial we will cover what is git and GitHub; what are their differences; how they work together; and how to use them.  The demonstration will show how to use git and GitHub to version control our software development, which allows us to better collaborate on projects and record the project's development history.\n    \n\n        \n        \n            \n    \n    \n        Virtual Environment Setup\n        Monday, June 28th at 3:30 pm ET\n        Presenter(s): Erik T. Everson\n        \n                https://github.com/rocco8773\n                     | \n                Documentation\n        \n            This tutorial will cover the creation, setup, and use of virtual environments.  Virtual environments allow you to create Python environments with differing dependencies.  This is helpful when you have task X with dependencies A and task Y with dependencies B, but the dependencies A and B conflict.  As a solution, two virtual environments can be created with the needed dependencies which you can then switch between for the two (or more) tasks.\n    \n\n        \n        \n            \n    \n    \n        PlasmaPy\n        Tuesday, June 29th at 11:00 am ET\n        Presenter(s): Nick Murphy and Ramiz Qudsi\n            Co-author(s): PlasmaPy Developers\n        \n                https://www.plasmapy.org\n                     | \n                Repository\n                     | \n                Documentation\n        \n            This tutorial will introduce the essentials of working with PlasmaPy.  We will work through some examples with Astropy's units and constants subpackages, which are both widely used in PlasmaPy.  We will then discuss PlasmaPy's particles, formulary, and dispersion subpackages.\n    \n\n        \n        \n            \n    \n    \n        Interface between Plasma Physics and Hydrogen in Solids\n        Tuesday, June 29th at 12:10 pm ET\n        Presenter(s): R\u00e9mi Delaporte-Mathurin\n        \n                Repository\n        \n    \n\n        \n        \n            \n    \n    \n        [Hack Session] First Contribution to an Open Source Project\n        Tuesday, June 29th at 2:00 pm ET\n        Presenter(s): Nick Murphy\n        \n                Documentation\n        \n            This hack session will be an opportunity to apply what we learned from the git and GitHub tutorial by making your first contribution to an open source project such as PlasmaPy.  This session will start with a demonstration of a contribution to PlasmaPy in order to improve the documentation on how to contribute to PlasmaPy.  After that demonstration, participants will be able to make a contribution to PlasmaPy or another project of their choice.\n    \n\n        \n        \n            \n    \n    \n        OMFIT\n        Wednesday, June 30th at 11:00 am ET\n        Presenter(s): Sterling Smith\n            Co-author(s): Orso Meneghini\n        \n                https://omfit.io\n                     | \n                Repository\n                     | \n                Documentation\n        \n            I will give an overview of the OMFIT framework, show how an existing physics module works, including its GUI, and show how to start a new module.\n    \n\n        \n        \n            \n    \n    \n        xarray Tutorial\n        Wednesday, June 30th at 12:10 pm ET\n        Presenter(s): Nikolas Logan\n        \n                Documentation\n        \n            This tutorial will be a live demonstration of the xarray package. The focus will be on how xarray can be used to make plasma physics code and data more transparent and user friendly. To this end, we will show how xarray's introduction of array dimensions and attributes \"allows for a more intuitive, more concise, and less error-prone developer experience\".\n    \n\n        \n        \n            \n    \n    \n        [Hack Session] Clean Coding Refactoring Session\n        Wednesday, June 30th at 2:00 pm ET\n        Presenter(s): Nick Murphy\n        \n                Documentation\n        \n            This hack session will start out with a short presentation on writing clean scientific software and describe clean coding strategies like: choosing meaningful variable names, writing short functions that do exactly one thing, and writing code as a top-down narrative.  Participants will then take code that they have written already and refactor it by applying these strategies.\n    \n\n        \n        \n            \n    \n    \n        BOUT++\n        Thursday, July 1st at 11:00 am ET\n        Presenter(s): Ben Dudson\n        \n                https://boutproject.github.io/\n                     | \n                Repository\n                     | \n                Documentation\n        \n    \n\n        \n        \n            \n    \n    \n        Gkeyll\n        Thursday, July 1st at 11:30 am ET\n        Presenter(s): Jimmy Juno\n        \n                Repository\n                     | \n                Documentation\n        \n    \n\n        \n        \n            \n    \n    \n        Uncertainties\n        Thursday, July 1st at 12:10 am ET\n        Presenter(s): Quinn Pratt\n        \n        \n    \n\n        \n        \n            \n    \n    \n        [Hack Session] Charged Particle Radiography with PlasmaPy\n        Thursday, July 1st at 2:00 pm ET\n        Presenter(s): Peter Heuer\n        \n                Documentation\n        \n            Charged particle radiography (often also called proton radiography) is a common diagnostic for electric and magnetic fields in high energy density plasmas. PlasmaPy now includes a synthetic charged particle radiography module for creating synthetic radiographs from provided grids of fields (either from simulations or analytically constructed). In this tutorial we will discuss the basics of charged particle radiography and the purpose of the PlasmaPy module. Then, attendees will be able to experiment with the software to generate radiographs using an example notebook. \n    \n\n        \n        \n            \n    \n    \n        SunPy\n        Friday, July 2nd at 11:00 am ET\n        Presenter(s): Laura Hayes\n        \n                https://sunpy.org/\n                     | \n                Repository\n                     | \n                Documentation\n        \n    \n\n        \n        \n            \n    \n    \n        TurboPy\n        Friday, July 2nd at 11:30 am ET\n        Presenter(s): Steve Richardson and Paul Adamson\n        \n                Documentation\n        \n    \n\n        \n        \n            \n    \n    \n        Writing Tests for Scientific Software\n        Friday, July 2nd at 12:10 pm ET\n        Presenter(s): Dominik Sta\u0144czak\n        \n                Documentation",
      "tags": "",
      "url": "https://hack.plasmapy.org/2021/tutorials/"
    },
    {
      "title": "Contact Us",
      "text": "Contact Us\nIf you have any questions about the Plasma Hack Week or want to get involved,\nthen please reach out to us on our Discord channel\nor email at hack@plasmapy.org.",
      "tags": "",
      "url": "https://hack.plasmapy.org/contact/"
    },
    {
      "title": "Plasma Hack Week",
      "text": "Discord - Chat\n                \n                \n            \n        \n        \n    \n    \n    \n        \n        \n            \n                \n                    2021 Hack Week\n                \n                \n            \n        \n        \n    \n    \n    \n        \n        \n            \n                \n                    Registration\n                \n            \n        \n        \n    \n\n\nHello world!  We are pleased to announce that the inaugural Plasma\nHack Week will be held remotely from June 28 \u2013 July 2, 2021.  \nWhat is a hack week and hacking?\nThe term hacking has a broad range of use in modern day slang.  Hacking\nduring the Plasma Hack Week event is seen as a collaborative\ncoding session among novices, experts, and like-minded learners to work \non projects and learn from each other.  Hacking is a learn-by-doing \nactivity, one of the best ways to further our knowledge.\nA hack week is a combination\nof a hackathon (a marathon of hacking) and a summer school.  While \nhackathons have traditionally prioritized collaborative code development\nactivities, a hack week includes a teaching component.  Hack weeks \ntypically have both structured learning activities (such as tutorials) as\nwell as unstructured project time. A hack week is a chance to:\n\nLearn how to contribute to an open source project;\nLearn new software development skills with peers;\nNetwork with fellow plasma students and researchers who are engaging \n  in software development;\nMeet fellow students and scientists who are engaging in programming;\nCollaborate on adding a new feature to an existing software project;\nAdd tests and/or documentation to an existing package; and/or\nWrite use cases and\n  user stories to support\n  software projects.\n\nJoin our Discord group\nIf you would like to participate or help plan Plasma Hack Week, please\njoin the Plasma Coders group on Discord.\nRegistration\nFor information about registering please check out our \n2021 Hack Week registration page.\nInstalling software for the Hack Week\nPlease follow these installation instructions if you\nwould like to install any of the software needed for the Hack Week.\nAlternatively, clicking on the following binder link will initialize a\nPython environment that can be run from your browser.  This environment\nwill have most of the Python packages needed for the week pre-installed,\nalong with git. \n\nResources\nWe have compiled resources that are likely to be useful\nfor Hack Week participants.  Topics include Python, git/GitHub, and \nresearch software engineering best practices.\nCode of conduct\nPlasma Hack Week has adopted the Contributor Covenant Code of\nConduct.\nPython tutorials\nWe held two tutorials to introduce Python to \nparticipants who are new to Python.  These tutorials were held \nthe week before the Hack Week on Monday, June 21 and Tuesday, June 22 at\n15 UTC (5 pm CEST / 11 am EDT / 8 am PDT).\nLicense\nThis website is made available under the Creative Commons Attribution 4.0\nInternational (CC BY 4.0)\nlicense.  Portions of this website have been adapted from\nPlasmaPy's main website and the \nHackWeek Toolkit\nunder the terms of the CC BY 4.0 license.",
      "tags": "",
      "url": "https://hack.plasmapy.org/"
    },
    {
      "title": "Resources",
      "text": "Plasma Hack Week: Resources\nThis page contains internet resources that are likely to be helpful to\nHack Week participants.  For a good general resource on writing software\nfor plasma science, we recommend Research software engineering with\nPython.\nVersion control\n\ngit and GitHub tutorial\nGitHub Guides\n\nPython\n\nOfficial Python documentation (including\n   a Python tutorial)\nPEP 8 style guide for Python\nPython Tutorial for Beginners\n\nTesting Python software\n\npytest\nLearn pytest in 60 minutes    \n\nWriting Python documentation\n\nGetting started with Sphinx\n\nBest practices\n\nBest practices for scientific computing and its prequel Good enough practices in scientific computing\nWriting clean scientific software\nChoose an open source license\nHow to cite software\n\nScientific Python packages\n\nNumPy\nSciPy\nmatplotlib  \npandas\nxarray  \nAstropy\n\nPlasma software\n\nPlasmaPy\nOMFIT\nBOUT++\nGKEYLL  \nSunPy\nTurboPy\nOMAS",
      "tags": "",
      "url": "https://hack.plasmapy.org/resources/"
    }
  ]
};
document.addEventListener('DOMContentLoaded', function () {
    var servicesLink = document.getElementById('services-nav');
    var insightsLink = document.getElementById('insights-nav');
    var industriesLink = document.getElementById('industries-nav');
    var aboutUsLink = document.getElementById('about-us-nav');
    var contactUsLink = document.getElementById('contact-us-nav');
    
    var servicesDropDown = document.getElementById('services-drop-down');
    var insightsDropDown = document.getElementById('insights-drop-down');
    var industriesDropDown = document.getElementById('industries-drop-down');
    var aboutUsDropDown = document.getElementById('about-us-drop-down');
    var contactUsDropDown = document.getElementById('contact-us-drop-down');

    var servicesArrow = document.getElementById('services-arrow');
    var insightsArrow = document.getElementById('insights-arrow');
    var industriesArrow = document.getElementById('industries-arrow');
    var aboutUsArrow = document.getElementById('aboutUs-arrow');
    var contactUsArrow = document.getElementById('contactUs-arrow');

    var openDropdown = null; // Track the currently open dropdown
    var openDropdownLink = null;
    var openDropdownArrow = null;

    document.addEventListener('click', function (event) {
        var target = event.target;
        var isInsideDropdown = target.closest('#services-drop-down') || target.closest('#insights-drop-down') || target.closest('#industries-drop-down') || target.closest('#about-us-drop-down') || target.closest('#contact-us-drop-down');
        var isLink = target.matches('#services-nav') || target.matches('#insights-nav') || target.matches('#industries-nav') || target.matches('#about-us-nav') || target.matches('#contact-us-nav');
    
        if (openDropdown && !isInsideDropdown && !isLink) {
            closeDropDown(openDropdown, openDropdownLink, openDropdownArrow);
            openDropdown = null;
            openDropdownLink = null;
            openDropdownArrow = null;
        }
    });

    servicesLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        handleDropdownToggle(servicesDropDown, servicesLink, servicesArrow);
    });

    insightsLink.addEventListener('click', function (event) {
        event.preventDefault();
        handleDropdownToggle(insightsDropDown, insightsLink, insightsArrow);
    });

    industriesLink.addEventListener('click', function (event) {
        event.preventDefault();
        handleDropdownToggle(industriesDropDown, industriesLink, industriesArrow);
    });

    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        handleDropdownToggle(aboutUsDropDown, aboutUsLink, aboutUsArrow);
    });

    contactUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        handleDropdownToggle(contactUsDropDown, contactUsLink, contactUsArrow);
    });

    function handleDropdownToggle(specificDropDown, link, dropdownArrow) {
        if (openDropdown === specificDropDown) {
            closeDropDown(openDropdown, link, dropdownArrow);
            openDropdown = null;
            openDropdownLink = null;
            openDropdownArrow = null;
        } else {
            if (openDropdown) {
                closeDropDown(openDropdown, openDropdownLink, openDropdownArrow);
            }
            openDropDown(specificDropDown, link, dropdownArrow);
            openDropdown = specificDropDown;
            openDropdownLink = link;
            openDropdownArrow = dropdownArrow;
        }
    }

    function openDropDown(specificDropDown, link, dropdownArrow) {
        specificDropDown.style.display = 'grid';
        specificDropDown.style.height = '15%';

        link.style.fontWeight = '600';

        dropdownArrow.style.transform = 'rotate(180deg)';
    }

    function closeDropDown(specificDropDown, link, dropdownArrow) {
        specificDropDown.style.display = 'none';
        specificDropDown.style.height = 0;

        link.style.fontWeight = 'normal';

        dropdownArrow.style.transform = 'rotate(0deg)';
    }

});




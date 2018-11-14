$.getJSON("https://bootswatch.com/api/4.json", function (data) {
    var themes = data.themes;
    var oTheme = $.grep(data.themes, function(theme) {
        return theme.name === 'Superhero';
    })[0];
    $("link").attr("href", oTheme.css);
    console.info('Theme loaded successfully!');

}, "json").fail(function(){
    console.warn('Fail to fetch bootswatch api!');
});
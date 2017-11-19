var _ = require('lodash');

var names = ['Orange', 'White', 'Yellow', 'Black', 'Purple', 'Blue'];
var otherNames = ['Gray', 'Film', 'Brown', 'Bike',  'Oliver Queen'];
var indx1=0;
var indx2=0;

_.each([names, otherNames], function(nameGroup) {
    mycolorsnames(nameGroup);
});

function mycolorsnames(values) {
    _.find(values, function(name)
    {
        if (name === 'Bike' || name ==='Film' || name ==='Oliver Queen') {
            console.log(name + ': It\'s not a color!');

        }
        else {
            console.log(name + '...  It\'s a color!');
            indx2++;
        }
        indx1++;
    });
    console.log(indx2 + ' colors of '+ indx1 +' words');
}
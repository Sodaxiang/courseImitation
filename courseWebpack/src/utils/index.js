export function tplReplace(template, replaceObject){
    return template().replace(/{{(.*?)}}/g, function(node, key){
        return replaceObject[key];
    });
}

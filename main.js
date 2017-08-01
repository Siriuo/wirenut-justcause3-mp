// Yes, this is it. This is all you need for a minimal package.
//console.log('Hello there. Obligatory "meow" to make alex happy.');

//commands

module.exports = ({ Command, manager }) => {
    manager.category('admin', 'Admins Only')
        .add(new Command('kick'))
        .parameter('target', 'string', 'networkId or (part of) name')
        .optional('reason', 'string', 'reason', { isTextParameter: true })
        .description('kick a player')
        .handler((player, target, reason) => {
            
        });
}

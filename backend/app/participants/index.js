export let list = [{
    firstName: 'Otavio',
    lastName: 'Dias',
    share: 10
}];

export function all(ctx){
    ctx.body = list;
}

export function add(ctx){
    const participant = {
        'firstName':ctx.request.body.firstName,
        'lastName':ctx.request.body.lastName,
        'share':parseInt(ctx.request.body.share)
    };

    if(participant.share < 1){
        ctx.body = {
            error : 'Informed share fewer than 1%'
        };
        ctx.status = 400;
        return;
    }

    if(totalShare(participant.share) > 100){
        ctx.body = {
            error : 'Total share greater than 100%'
        };
        ctx.status = 400;
        return;
    }

    list = [...list, participant];

    list.sort((a, b) => a.share - b.share);

    ctx.body = participant;
    ctx.status = 201;
}

export function remove(ctx){
    const id = parseInt(ctx.params.id);
    if(id > list.length - 1 || id < 0){
        ctx.body = {
            error : 'Index not found in participants'
        };
        ctx.status = 400
        return;
    }
    list.splice(id,1);
    ctx.status = 200;
}

function totalShare(newShare){
    return newShare + list.reduce((prev, current) => prev + current.share, 0);
}
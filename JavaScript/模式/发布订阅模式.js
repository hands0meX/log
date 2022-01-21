/**
 * Subs:
 * Publisher: emit, on, off,  once
 */
//links: https://blog.csdn.net/wyqvong/article/details/105671359
class Subs {
    constructor(eventName) {
        this.subs = []
    }
    add(fn) {
        this.subs.push(fn)
    }

    
}

class Publisher {
    constructor() {
        this.map = new Map()
    }

    on(eventName, fn) {
        if(this.map.has(eventName)) this.map.get(eventName).add(fn)
        else {
            const sub = new Subs()
            sub.add(fn)
            this.map.set(eventName,sub) 
        }
    }

    off(eventName) {
        this.map.delete(eventName)
    }

    emit(eventName) {
        const fns = this.map.get(eventName)?.subs || []
        fns.forEach(fn => fn())
    }

    once(eventName,fn) {
        this.on(eventName,() => {
            fn()
            this.off(eventName)
        })
    }

    
}

const pub = new Publisher()
pub.on('click',() => {
    console.log('1')
})
pub.on('click',() => {
    console.log('2')
})

pub.on('move',() => {
    console.log('move')
})

pub.emit('move')
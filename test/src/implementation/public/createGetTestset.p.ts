
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"


import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub/dist"

export const createGetTestset: api.FCreateGetTestset = ($d) => {

    const deps = $d
    return ($, $d) => {

        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>( )
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }
        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}
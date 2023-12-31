import React, { createContext, useEffect, useState } from "react";
import { AppState, Platform } from "react-native";
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from "react-native-permissions";

//cómo luce el contexto
export interface PermissionsState {
    locationStatus: PermissionStatus;
    // camaraStatus: ...
}

//contexto inicial
export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable'
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}
export const PermissionsContext = createContext({} as PermissionsContextProps);


export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(permissionsInitState);

    useEffect(() => {
        checkLocationPermission();
        const subscription = AppState.addEventListener('change', state => {
            if (state !== 'active') return;
            checkLocationPermission();
        })

        return () => {
            subscription.remove();
        }
    }, [])

    const askLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if (permissionStatus === 'blocked') {
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }


    const checkLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }


    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            {children}
        </PermissionsContext.Provider>
    )
}
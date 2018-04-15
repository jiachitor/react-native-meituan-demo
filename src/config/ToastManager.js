import { Toast } from 'teaset';

const initialOption = {
    position: 'center',
    duration: 1000000,
}

class ToastManager {
    static showToast = (text, option = initialOption) => {
        this.toast = Toast.show({
            text: text,
            // icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
            option
        });
    }
    static hideToast = () => {
        if (this.toast) {
            Toast.hide(this.toast);
            this.toast = null;
        }
    }
}
export default ToastManager
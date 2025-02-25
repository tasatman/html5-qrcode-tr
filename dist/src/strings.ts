/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */

/**
 * Translated by Google Gemini
 * 
 * Uploaded by tasatman
 * 
 * Many thanks to mebjas for this great library
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR kodu ayrıştırma hatası, hata = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Kullanıcı medyasına erişim hatası, hata = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "Cihaz navigator.mediaDevices'ı desteklemiyor, bu durumda yalnızca "
        + "desteklenen cameraIdOrConfig, deviceId parametresi (string) olmalıdır.";
    }

    public static cameraStreamingNotSupported(): string {
        return "Tarayıcı tarafından kamera akışı desteklenmiyor.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Desteklenen cihazlar sorgulanamıyor, bilinmeyen hata.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Kamera erişimi yalnızca https veya localhost gibi güvenli bağlamlarda desteklenir.";
    }

    public static scannerPaused(): string {
        return "Tarayıcı duraklatıldı";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Taranıyor";
    }

    public static idleStatus(): string {
        return "Boşta";
    }

    public static errorStatus(): string {
        return "Hata";
    }

    public static permissionStatus(): string {
        return "İzin";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Kamera Yok";
    }

    public static lastMatch(decodedText: string): string {
        return `Son Eşleşme: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Kod Tarayıcı";
    }

    public static cameraPermissionTitle(): string {
        return "Kamera İzinleri İsteği";
    }

    public static cameraPermissionRequesting(): string {
        return "Kamera izinleri isteniyor...";
    }

    public static noCameraFound(): string {
        return "Kamera bulunamadı";
    }

    public static scanButtonStopScanningText(): string {
        return "Taramayı Durdur";
    }

    public static scanButtonStartScanningText(): string {
        return "Taramayı Başlat";
    }

    public static torchOnButton(): string {
        return "Feneri Aç";
    }

    public static torchOffButton(): string {
        return "Feneri Kapat";
    }

    public static torchOnFailedMessage(): string {
        return "Fener açılamadı";
    }

    public static torchOffFailedMessage(): string {
        return "Fener kapatılamadı";
    }

    public static scanButtonScanningStarting(): string {
        return "Kamera Başlatılıyor...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Bir Resim Dosyası Tara";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Doğrudan Kamerayla Tara";
    }

    public static selectCamera(): string {
        return "Kamera Seç";
    }

    public static fileSelectionChooseImage(): string {
        return "Resim Seç";
    }

    public static fileSelectionChooseAnother(): string {
        return "Başka Birini Seç";
    }

    public static fileSelectionNoImageSelected(): string {
        return "Resim seçilmedi";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "Anonim Kamera";
    }

    public static dragAndDropMessage(): string {
        return "Veya taramak için bir resim bırakın";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "Veya taramak için bir resim bırakın (diğer dosyalar desteklenmiyor)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "zoom"; // This one is usually kept in English
    }

    public static loadingImage(): string {
        return "Resim yükleniyor...";
    }

    public static cameraScanAltText(): string {
        return "Kamera tabanlı tarama";
    }

    public static fileScanAltText(): string {
        return "Dosya tabanlı tarama";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Güçlendiren: ";
    }

    public static reportIssues(): string {
        return "Sorunları bildir";
    }
}

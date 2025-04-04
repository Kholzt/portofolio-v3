<?php

namespace App\Filament\Pages;

use Filament\Actions\Action;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Pages\Page;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Filament\Notifications\Notification;

class Biodata extends Page implements HasForms
{
    use InteractsWithForms;
    protected static ?string $model = User::class;

    protected static ?string $navigationGroup = 'My Data';
    protected static ?int $navigationSort = 3;
    protected static string $view = 'filament.pages.biodata';

    public ?array $data = [];

    public function mount()
    {
        $user = Auth::user();

        $this->form->fill([
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->biodata->phone ?? '',
            'address' => $user->biodata->address ?? '',
            'date_of_birth' => $user->biodata->date_of_birth ?? null,
            'place_of_birth' => $user->biodata->place_of_birth ?? '',
            'about_me' => $user->biodata->about_me ?? '',
            'photo' => $user->biodata->photo ?? '',
            'github' => $user->biodata->github ?? '',
            'instagram' => $user->biodata->instagram ?? '',
            'linkedin' => $user->biodata->linkedin ?? '',
        ]);
    }

    public function form(Form $form): Form
    {
        return $form->schema([
            FileUpload::make('photo')
                ->label('Foto Profil')
                ->imagePreviewHeight("150") // Menampilkan preview gambar
                ->visibility('public')
                ->disk("public")
                ->image()
                ->directory('profile-photos'),
            TextInput::make('name')
                ->label('Nama')
                ->required(),
            TextInput::make('email')
                ->label('Email')
                ->email()
                ->disabled(),
            TextInput::make('phone')
                ->label('Nomor Telepon')
                ->required(),
            Textarea::make('address')
                ->label('Alamat'),
            DatePicker::make('date_of_birth')
                ->label('Tanggal Lahir')
                ->required(),
            TextInput::make('place_of_birth')
                ->label('Tempat Lahir')
                ->required(),
            Textarea::make('about_me')
                ->label('Tentang Saya'),

            TextInput::make('github')
                ->label('GitHub')
                ->url(),
            TextInput::make('instagram')
                ->label('Instagram')
                ->url(),
            TextInput::make('linkedin')
                ->label('LinkedIn')
                ->url(),
        ])->statePath('data');
    }

    public function save()
    {
        $this->validate();
        $user = Auth::user();

        // Pisahkan data untuk tabel `users` dan `biodata`
        $userData = [
            'name' => $this->data['name'],
        ];
        $biodataData = [
            'phone' => $this->data['phone'],
            'address' => $this->data['address'],
            'date_of_birth' => $this->data['date_of_birth'],
            'place_of_birth' => $this->data['place_of_birth'],
            'about_me' => $this->data['about_me'],
            'photo' => $this->data['photo'],
            'github' => $this->data['github'],
            'instagram' => $this->data['instagram'],
            'linkedin' => $this->data['linkedin'],
        ];

        if (isset($this->data['photo']) && is_array($this->data['photo'])) {
            $photo = reset($this->data['photo']); // Ambil file pertama dari array

            // Hapus foto lama jika ada

            if (!is_string($photo)) {
                if ($user->biodata->photo) {
                    \Storage::disk('public')->delete($user->biodata->photo);
                }
                $filePath = $photo->store('profile-photos', 'public'); // Simpan ke storage/public/profile-photos
                // Simpan foto baru
                unlink($photo->getPathname());
                $biodataData['photo'] = $filePath; // Simpan path ke database
            } else {
                $biodataData['photo'] = $photo; // Simpan path ke database
            }
        }

        // Simpan ke tabel `users`
        $user->update($userData);

        // Simpan ke tabel `biodata`, buat baru jika belum ada
        $user->biodata()->updateOrCreate([], $biodataData);

        Notification::make()
            ->title('Biodata berhasil diperbarui!')
            ->success()
            ->send();
    }

    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label('Simpan')
                ->action('save')
                ->color('primary'),
        ];
    }
}
